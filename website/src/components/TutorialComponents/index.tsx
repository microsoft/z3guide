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
  return (
    <div>
      <button className="button button--primary" onClick={handleClick}>{buttonTxt}</button>
      <br />
      <Z3Editor input={String(code)} />
      {count > 0 ? <Output result={result} /> : <div />}
    </div>
  );
}

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

  // console.log(edit.getState());

  return (
    <div ref={editorRef}>
    <CodeBlock
      language="lisp"
      showLineNumbers
    >
      {code}
    </CodeBlock>
    </div>
  );
}

