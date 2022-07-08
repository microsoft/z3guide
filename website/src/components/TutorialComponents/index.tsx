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

function Z3Editor({ input }) {
  const [code, setCode] = useState(input);
  const editorRef = useRef(null);
  const codeArr = code.split("\n");

  const onEditableChange = useCallback((text: String, pos: Position) => {
    const newCode = pos.content;
    const line = pos.line;
    codeArr[line] = newCode;
    setCode(codeArr.join("\n"));
  }, []);

  const edit = useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2
  });

  const updateInput = (e) => {
    setCode(e.target.innerText);
    // run.props = {disabled: false, ...run.props};
  };

  // run.props = { onclick: () => console.log(code), ...run.props };
  // console.log(edit.getState());

  const codeBlock = (<CodeBlock
    language="lisp"
    showLineNumbers
  >
    {input}
  </CodeBlock>);

  return (
    <div contentEditable={true} onKeyUp={updateInput}>
      {codeBlock}
    </div>
  );
}

function OutputToggle({rendered, handleClick}) {

  const buttonTxt = rendered ? "Click to Hide Output" : "Click to Render Output";

  return (
    <button className="button button--primary" onClick={handleClick}>
      {buttonTxt}
    </button>
  );
}

function RunButton({ onClick, isDisabled }) {
  return (
    <button className="button button--primary" disabled={isDisabled} onClick={onClick}>
      Run
    </button>
  );
}


export default function Z3CodeBlock({ input }) {
  const { code, result } = input;

  const [rendered, setRendered] = useState(false);
  const handleClick = () => {
    setRendered(!rendered);
  };

  return (
    <div>
      <OutputToggle rendered={rendered} handleClick={handleClick}/>
      <RunButton onClick={()=>{}} isDisabled={true}/>
      <br />
      <Z3Editor input={String(code)} />
      {rendered ? <Output result={result} /> : <div/>}
    </div>
  );
}


