import React, { useState, useRef } from 'react';
import CodeBlock from "@theme/CodeBlock";
import { init } from 'z3-solver/build/browser';
import initZ3 from 'z3-solver/build/z3-built.js';


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

  const onDidClickRun = () => {
    window.getSelection().removeAllRanges(); // deselect editor because cursor position gets weird

    // currently only updating the output error with the new input;
    // next goal: run z3

    const newResult = { ...result };
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

  }

  return (
    <div>
      {outputRendered ? <div /> : <OutputToggle onClick={onDidClickOutputToggle} />}
      {outputRendered ? <RunButton onClick={onDidClickRun} /> : <div />}
      <Z3Editor inputRef={currCode.current} editable={outputRendered} onChange={updateCode} />
      {outputRendered ? <Output result={output} /> : <div />}
    </div>
  );
}


async function runZ3Web(input: string): Promise<string> {
  // problem with importing initZ3
  await initZ3({
    locateFile: (f) => f,
    mainScriptUrlOrBlob: "z3-built.js",
  });
  const { em, Z3 } = await init();
  // done on every snippet
  const cfg = Z3.mk_config();
  const ctx = Z3.mk_context(cfg);
  Z3.del_config(cfg);

  let output, error = undefined;

  try {
    output = await Z3.eval_smtlib2_string(ctx, input);
  } catch (e) {
    // just let it blow up
    error = e.message;
  } finally {
    // try {
    Z3.del_context(ctx);
    em.PThread.terminateAllThreads();
  }

  return JSON.stringify({ output: output, error: error });
}


