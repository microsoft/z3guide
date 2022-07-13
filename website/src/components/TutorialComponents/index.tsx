import React, { useState, useRef, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import CodeBlock from "@theme/CodeBlock";
import runZ3Web from './runZ3Web';
import CaretPositioning from './EditCaretPositioning';


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

function Z3Editor({ id, input, editable, editorState, onEditorStateChange }) {

  if (ExecutionEnvironment.canUseDOM) {
    useEffect(() => {
      CaretPositioning.restoreSelection(document.getElementById(id) as Node, editorState.caretPosition);
    });
  }

  const saveCaretPosition = (ExecutionEnvironment.canUseDOM) ? (e) => {
    let targetValue = e.currentTarget.textContent;
    //save caret position(s), so can restore when component reloads
    let savedCaretPosition = CaretPositioning.saveSelection(e.currentTarget);
    onEditorStateChange({
      "newValue": targetValue,
      "caretPosition": savedCaretPosition
    }
    );
  } : () => { };

  const onChangeHandler = (ExecutionEnvironment.canUseDOM) ? (e) => {
    saveCaretPosition(e);
    // console.log(editorState.caretPosition);
  } : () => { };

  const codeBlock = (<CodeBlock
    language="lisp"
    showLineNumbers
  >
    {input}
  </CodeBlock>);

  return (
    <div
      id={id}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      onInput={onChangeHandler}>
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

  const [outputRendered, setOutputRendered] = useState(false);

  const [output, setOutput] = useState(result);

  const [editorState, setEditorState] = useState({
    newValue: code,
    caretPosition: {
      start: 0,
      end: 0
    }
  });

  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  // bypassing server-side rendering
  const onDidClickRun =
    (ExecutionEnvironment.canUseDOM) ? () => {

      // TODO: only load z3 when needed
      const newResult = { ...result };
      // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
      runZ3Web(editorState.newValue).then((res) => {
        const result = JSON.parse(res);
        if (result.output) {
          newResult.output = result.output;
          newResult.status = 'z3-ran';
        } else if (result.error) {
          newResult.error = result.error;
          newResult.status = 'z3-failed';
        } else {
          // both output and error are empty, which means we have a bug
          throw new Error(`runZ3Web returned no output or error with input:\n${editorState.newValue}`);
        }
      }).catch((error) => {
        // runZ3web fails
        throw new Error(`runZ3Web failed with input:\n${editorState.newValue}\n\nerror:\n${error}`);
      }).finally(() => {
        setOutput(newResult);
      });

    } : () => { };

  return (
    <div>
      {outputRendered ? <div /> : <OutputToggle onClick={onDidClickOutputToggle} />}
      {outputRendered ? <RunButton onClick={onDidClickRun} /> : <div />}
      <Z3Editor
        id={result.hash}
        input={editorState.newValue}
        editable={outputRendered}
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
      {outputRendered ? <Output result={output} /> : <div />}
    </div>
  );
}


