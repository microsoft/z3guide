import React, { useState } from 'react';
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