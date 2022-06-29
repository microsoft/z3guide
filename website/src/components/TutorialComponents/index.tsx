import React, { useState } from 'react';
import CodeBlock from "@theme/CodeBlock";
import { getInputUtilityClass } from '@mui/material';

const Output = ({ result }) => {
  const success = result.status === 0;
  return (
    <pre>
      <b>{success ? "Output: " : "Error: "}</b>
      {success ? result.output : "Z3 failed" }
      {"\n"}
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