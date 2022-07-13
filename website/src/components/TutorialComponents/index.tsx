import React, { useState, useRef, useEffect } from 'react';
import { LiveProvider, LiveEditor, withLive, LiveError, LivePreview, LiveContext } from 'react-live';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { type Props } from "@theme/CodeBlock";
import { usePrismTheme } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import runZ3Web from './runZ3Web';
import { Language } from 'prism-react-renderer';
import styles from '@docusaurus/theme-live-codeblock/src/theme/Playground/styles.module.css';

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

function RunButton({ onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      Run (with edit)
    </button>
  );
}


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

function Z3Editor(props: MyProps) {

  const { id, input, language, showLineNumbers, editable, onChange } = props;

  const prismTheme = usePrismTheme();
  const isBrowser = useIsBrowser();

  const component = (<div className={styles.playgroundContainer}>
    <LiveProvider
      code={input}
      theme={prismTheme}
      id={id}
    >
      <>
        <LiveEditor
          disabled={!editable}
          key={String(isBrowser)}
          className={styles.playgroundEditor}
          onChange={onChange}
          language={language}
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


export default function Z3CodeBlock({ input }) {
  const { code, result } = input;

  const [currCode, setCurrCode] = useState(code);

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

      console.log(`currCode: ${currCode}`);
      // TODO: only load z3 when needed
      const newResult = { ...result };
      // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
      runZ3Web(currCode).then((res) => {
        const result = JSON.parse(res);
        if (result.output) {
          newResult.output = result.output;
          newResult.status = 'z3-ran';
        } else if (result.error) {
          newResult.error = result.error;
          newResult.status = 'z3-failed';
        } else {
          // both output and error are empty, which means we have a bug
          throw new Error(`runZ3Web returned no output or error with input:\n${currCode}`);
        }
      }).catch((error) => {
        // runZ3web fails
        throw new Error(`runZ3Web failed with input:\n${currCode}\n\nerror:\n${error}`);
      }).finally(() => {
        setOutput(newResult);
      });

    } : () => { };

  const inputNode = <>{code}</>

  return (
    <div>
      {outputRendered ? <div /> : <OutputToggle onClick={onDidClickOutputToggle} />}
      {outputRendered ? <RunButton onClick={onDidClickRun} /> : <div />}
      <Z3Editor
        children={inputNode}
        input={code}
        id={result.hash}
        showLineNumbers={true}
        onChange={setCurrCode}
        editable={outputRendered}
        language={"lisp" as Language}
      />
      {outputRendered ? <Output result={output} /> : <div />}
    </div>
  );
}


