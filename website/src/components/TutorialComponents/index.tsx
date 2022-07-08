import React, { useState, useRef, useCallback } from 'react';
import { Position, useEditable } from 'use-editable';
import CodeBlock from "@theme/CodeBlock";

const Output = ({ result }) => {
  const success = result.status === "z3-ran";
  const emptyOutput = result.output === "";
  return (
    <pre>
      {success ? "" : <span style={{ color: "red" }}><b>Error: </b><br /></span>}
      {success ?
        emptyOutput ? "--Output is empty--" : result.output
        : result.error}
    </pre>
  );
};

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
    const newResult = {...result};
    let newOutput = `new code is: \n${newCode}`;
    newResult.output = newOutput;
    setOutput(newResult);

    // update the data behind the editor so that CopyButton works properly after clicking Run
    currCode.current = newCode;
  }

  return (
    <div>
      {outputRendered ? <div /> : <OutputToggle onClick={onDidClickOutputToggle} />}
      {outputRendered ? <RunButton onClick={onDidClickRun} /> : <div />}
      <Z3Editor inputRef={currCode.current} editable={outputRendered} onChange={updateCode} />
      <b>Output:</b>
      <br />
      {outputRendered ? <Output result={output} /> : <div />}
    </div>
  );
}


