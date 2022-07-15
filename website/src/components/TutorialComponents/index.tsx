import React, { useState, useRef, useEffect, MutableRefObject, useReducer } from 'react';
import { LiveProvider, LiveEditor, LiveContext } from 'react-live';
import { type Props } from "@theme/CodeBlock";
import { usePrismTheme } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import runZ3Web from './runZ3Web';
import { Language } from 'prism-react-renderer';
import liveCodeBlockStyles from '@docusaurus/theme-live-codeblock/src/theme/Playground/styles.module.css';
import styles from './styles.module.css';

interface MyProps extends Props {
  readonly id: string;
  readonly input: string;
  readonly language?: Language;
  readonly editable?: boolean;
  readonly onChange?: (code: string) => void;
}

function OutputToggle({ onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      Run
    </button>
  );
}

function RunButton({ onClick, runFinished }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      {runFinished ? "Edit and Run" : "Running..."}
    </button>
  );
}

function ResetButton({ onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      Reset
    </button>
  );
}


function Output({ result, codeChanged }) {
  const success = result.status === "z3-ran";
  const emptyOutput = result.output === "";
  return (
    <div>
      <b>Output{codeChanged ? ' (outdated)' : ''}:</b>
      <br />
      <pre className={codeChanged ? styles.outdated : ''}>
        {success ? "" : <span style={{ color: "red" }}><b>Error: </b><br /></span>}
        {success ?
          emptyOutput ? "--Output is empty--" : result.output
          : result.error}
      </pre>
    </div>
  );
}


function Z3Editor(props: MyProps) {

  const { id, input, language, showLineNumbers, editable, onChange } = props;
  console.log(`rendered with: ${input}`);


  const prismTheme = usePrismTheme();
  const isBrowser = useIsBrowser();

  const newContext = { code: input, language: language, theme: prismTheme, disabled: !editable, onChange: onChange };


  const component = (
    <div
      className={`${liveCodeBlockStyles.playgroundContainer} ${editable ? styles.editable : ''}`}
    >
      <LiveProvider
        code={input}
        language={language}
        theme={prismTheme}
        id={id}
      >
        <>
          <LiveEditor
            key={String(isBrowser)}
            className={liveCodeBlockStyles.playgroundEditor}
            code={input}
            {...newContext}
          />
        </>
      </LiveProvider>
    </div>);

  return (
    <>
      {isBrowser ? component : <></>}
    </>
  );

}

// utility
function reducer(state, action) {
  switch (action.type) {
    case 'onDidClickReset':
      console.log(`curr: ${state.editorCode}`);
      console.log(`new: ${action.payload}`);
      return {
        ...state,
        editorCode: action.payload,
      };
    default:
      return state;
  }
}

function init(initCode) {
  return { editorCode: initCode };
}

// event handlers

const onDidClickOutputToggle = ({ setOutputRendered, outputRendered }) => {
  setOutputRendered(!outputRendered);
};

const onDidClickRun = ({ setRunFinished, result, currCode, setOutput, setCodeChanged }) => {
  setRunFinished(false);
  console.log('run clicked');
  // TODO: only load z3 when needed
  const newResult = { ...result };
  let errorMsg;
  // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
  runZ3Web(currCode.code).then((res) => {
    const result = JSON.parse(res);
    if (result.output) {
      const errRegex = new RegExp(/(\(error)|(unsupported)/g);
      const hasError = result.output.match(errRegex);
      newResult.output = hasError ? '' : result.output;
      newResult.error = hasError ? result.output : '';
      newResult.status = hasError ? 'z3-runtime-error' : 'z3-ran';
    } else if (result.error) {
      newResult.error = result.error;
      newResult.status = 'z3-failed';
    } else {
      // both output and error are empty, which means we have a bug
      errorMsg = `runZ3Web returned no output or error with input:\n${currCode.code}`
      newResult.error = errorMsg
      newResult.status = 'buggy-code';
      throw new Error(errorMsg);
    }
  }).catch((error) => {
    // runZ3web fails
    errorMsg = `runZ3Web failed with input:\n${currCode.code}\n\nerror:\n${error}`;
    newResult.error = errorMsg;
    newResult.status = 'runZ3Web-failed';
    throw new Error(errorMsg);
  }).finally(() => {
    setOutput(newResult);
    setCodeChanged(false);
    setRunFinished(true);
  });
};

const onDidChangeCode = ({ newCode, setCurrCode, outputRendered, setCodeChanged }) => {
  setCurrCode({ code: newCode });
  if (outputRendered) setCodeChanged(true);
};

const onDidClickReset = ({ code, result, setCurrCode, setOutput, setCodeChanged, dispatch }) => {
  setCurrCode({ code: code });
  setOutput(result);
  setCodeChanged(false);
  dispatch({ type: 'onDidClickReset', payload: code });
  // codeRef.current = code;
}

export default function Z3CodeBlock({ input }) {
  const { code, result } = input;

  const [currCode, setCurrCode] = useState({ code: code });

  const [codeChanged, setCodeChanged] = useState(false);

  const [outputRendered, setOutputRendered] = useState(false);

  const [runFinished, setRunFinished] = useState(true);

  const [output, setOutput] = useState(result);

  const [state, dispatch] = useReducer(reducer, code, init);

  const inputNode = <>{currCode.code}</>

  return (
    <div>
      {outputRendered ? <></> :
        <OutputToggle onClick={() => onDidClickOutputToggle({ setOutputRendered, outputRendered })} />}
      {outputRendered ?
        <RunButton onClick={() => onDidClickRun({ setRunFinished, result, currCode, setOutput, setCodeChanged })} runFinished={runFinished} />
        : <></>}
      {outputRendered ? <ResetButton onClick={() => onDidClickReset({ code, result, setCurrCode, setOutput, setCodeChanged, dispatch })} /> : <></>}
      <Z3Editor
        children={inputNode}
        input={state.editorCode}
        id={result.hash}
        showLineNumbers={true}
        onChange={(newCode) => onDidChangeCode({ newCode, setCurrCode, outputRendered, setCodeChanged })}
        editable={outputRendered}
        language={"lisp" as Language}
      />
      {outputRendered ? <Output codeChanged={codeChanged} result={output} /> : <></>}
    </div>
  );
}


