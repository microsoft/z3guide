import React, { useState, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import CodeBlock from "@theme/CodeBlock";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


declare global {
  interface Window { z3Promise: any } // use any to escape typechecking
}


function loadZ3(callback: () => void) {

  // }
};

async function runZ3Web(input: string): Promise<string> {

  // load z3
  const callback = () => console.log('z3 loaded');
  const existingScript = document.getElementById('z3-script');
  if (!existingScript) {
    const { siteConfig } = useDocusaurusContext();
    const script = document.createElement('script');
    script.src = `${siteConfig.baseUrl}z3-built.js`;
    script.id = 'z3-script';
    document.head.appendChild(script);
    script.onload = () => {
      callback();
    };
  }
  if (existingScript && callback) callback();

  // init z3
  const z3 = require('z3-solver');
  window.z3Promise = z3.init();
  let { Z3 } = await window.z3Promise;

  // done on every snippet
  const cfg = Z3.mk_config();
  const ctx = Z3.mk_context(cfg);
  Z3.del_config(cfg);

  let output, error = undefined;

  try {
    output = await Z3.eval_smtlib2_string(ctx, input);
  } catch (e) {
    // error with running z3
    error = e.message;
  } finally {
    Z3.del_context(ctx);
  }

  return JSON.stringify({ output: output, error: error });
}

function Output({ result }) {
  const success = result.status === "z3-ran";
  const emptyOutput = result.output === "";
  return (
    <div>
      <b>Output:</b>
      <br />
      <pre>
        {success ? "" : <span style={{ color: "red" }}><b>Error: </b><br /></span>}
        {success ?
          emptyOutput ? "--Output is empty--" : result.output
          : result.error}
      </pre>
    </div>
  );
}

function Z3Editor({ inputRef, editable, onChange }) {

  const updateInput = (e) => {
    onChange(e.target.innerText);
  };

  const codeBlock = (<CodeBlock
    language="lisp"
    showLineNumbers
  >
    {inputRef}
  </CodeBlock>);

  return (
    <div contentEditable={editable} onInput={updateInput}>
      {codeBlock}
    </div>
  );
}

function OutputToggle({ onClick }) {

  return (
    <button className="button button--primary" onClick={onClick}>
      Run
    </button>
  );
}

function RunButton({ onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      Run (with edit)
    </button>
  );
}

export default function Z3CodeBlock({ input }) {
  const { code, result } = input;
  const [newCode, updateCode] = useState(code);
  const currCode = useRef(newCode);

  const [outputRendered, setOutputRendered] = useState(false);

  const [output, setOutput] = useState(result);

  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  const onDidClickRun =
    (ExecutionEnvironment.canUseDOM) ? () => {
      window.getSelection().removeAllRanges(); // deselect editor because cursor position gets weird

      // currently only updating the output error with the new input;
      // next goal: run z3
      // TODO: only load z3 when needed

      const newResult = { ...result };
      // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
      runZ3Web(newCode).then((res) => {
        const result = JSON.parse(res);
        if (result.output) {
          newResult.output = result.output;
          newResult.status = 'z3-ran';
        } else if (result.error) {
          newResult.error = result.error;
          newResult.status = 'z3-failed';
        } else {
          // both output and error are empty, which means we have a bug
          throw new Error(`runZ3Web returned no output or error with input:\n${newCode}`);
        }
      }).catch((error) => {
        // runZ3web fails
        throw new Error(`runZ3Web failed with input:\n${newCode}\n\nerror:\n${error}`);
      }).finally(() => {
        setOutput(newResult);

        // update the data behind the editor so that CopyButton works properly after clicking Run
        currCode.current = newCode;
      });

    } : () => { };

  return (
    <div>
      {outputRendered ? <div /> : <OutputToggle onClick={onDidClickOutputToggle} />}
      {outputRendered ? <RunButton onClick={onDidClickRun} /> : <div />}
      <Z3Editor inputRef={currCode.current} editable={outputRendered} onChange={updateCode} />
      {outputRendered ? <Output result={output} /> : <div />}
    </div>
  );
}


