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

function Z3Editor({ input, onChanged, onEdited }) {
  // const [code, setCode] = useState(input);
  // const editorRef = useRef(null);
  // const codeArr = code.split("\n");

  // const onEditableChange = useCallback((text: String, pos: Position) => {
  //   const newCode = pos.content;
  //   const line = pos.line;
  //   codeArr[line] = newCode;
  //   setCode(codeArr.join("\n"));
  // }, []);

  // const edit = useEditable(editorRef, onEditableChange, {
  //   disabled: false,
  //   indentation: 2
  // });

  const updateInput = (e) => {
    onChanged(e.target.innerText);
    onEdited(true);
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

function OutputToggle({rendered, onClick}) {

  const buttonTxt = rendered ? "Click to Hide Output" : "Click to Render Output";

  return (
    <button className="button button--primary" onClick={onClick}>
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
  const {code, result} = input;
  const [newCode, updateCode] = useState(code);
  const [outputRendered, setOutputRendered] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
 
  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  const onDidClickRun = () => {
    console.log(`new code is: ${newCode}`);
  }

  return (
    <div>
      <OutputToggle rendered={outputRendered} onClick={onDidClickOutputToggle}/>
      <RunButton onClick={onDidClickRun} isDisabled={!isEdited}/>
      <br />
      <Z3Editor input={code} onChanged={updateCode} onEdited={setIsEdited}/>
      {outputRendered ? <Output result={result} /> : <div/>}
    </div>
  );
}


