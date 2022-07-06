import React, { useState } from 'react';
import CodeBlock from "@theme/CodeBlock";

const Output = ({ result }) => {
  const success = result.status === "z3-ran";
  return (
    <pre>
      {success ? "" : <span style={{ color: "red" }}><b>Error: </b><br /></span>}
      {success ? result.output : result.error}
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
      <button onClick={handleClick}>{buttonTxt}</button>
      <CodeBlock
        language="lisp"
        showLineNumbers
      >
        {code}
      </CodeBlock>
      {count > 0 ? <Output result={result} /> : <div />}
    </div>
  );
}