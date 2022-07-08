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

function Z3Editor({ input, run }) {
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
    console.log(code);
    // run.props = {disabled: false, ...run.props};
    // setCode(e.target.value);
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


export default function Z3CodeBlock({ input }) {
  const [count, setCount] = useState(0);
  const { code, result } = input;
  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };
  const buttonTxt = (count > 0) ? "Click to Hide Output" : "Click to Render Output";
  const btnRenderOuput = <button className="button button--primary" onClick={handleClick}>{buttonTxt}</button>;
  const btnRun = <button className="button button--primary" disabled={true}>Run</button>

  return (
    <div>
      {btnRenderOuput}
      {btnRun}
      <br />
      <Z3Editor input={String(code)} run={btnRun} />
      {count > 0 ? <Output result={result} /> : <div />}
    </div>
  );
}


