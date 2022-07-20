import React, { useState, useRef, useEffect } from 'react';
import { LiveProvider, LiveEditor, withLive, LiveError, LivePreview, LiveContext } from 'react-live';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { type Props } from "@theme/CodeBlock";
import { usePrismTheme } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { Language } from 'prism-react-renderer';
import liveCodeBlockStyles from '@docusaurus/theme-live-codeblock/src/theme/Playground/styles.module.css';
import styles from './styles.module.css';

// [CONFIG HERE] custom language run process (client side) imports
import runZ3Web from './runZ3Web';

// [CONFIG HERE] language-process mapping
const clientConfig = {
  'z3': runZ3Web,
}

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

function CustomCodeEditor(props: MyProps) {

  const { id, input, language, showLineNumbers, editable, onChange } = props;

  const prismTheme = usePrismTheme();
  const isBrowser = useIsBrowser();

  const component = (
    <div className={`${liveCodeBlockStyles.playgroundContainer} ${editable ? styles.editable : ''}`}>
      <LiveProvider
        code={input}
        theme={prismTheme}
        id={id}
      >
        <>
          <LiveEditor
            disabled={!editable}
            key={String(isBrowser)}
            className={liveCodeBlockStyles.playgroundEditor}
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


export default function CustomCodeBlock({ input }) {

  const { lang, code, result } = input;

  const [currCode, setCurrCode] = useState(code);

  const [codeChanged, setCodeChanged] = useState(false);

  const [outputRendered, setOutputRendered] = useState(false);

  const [runFinished, setRunFinished] = useState(true);

  const [output, setOutput] = useState(result);

  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  // bypassing server-side rendering
  const onDidClickRun =
    (ExecutionEnvironment.canUseDOM) ? () => {

      setRunFinished(false);
      // TODO: only load z3 when needed
      const newResult = { ...result };
      let errorMsg;

      const runProcess = clientConfig[lang];
      // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
      runProcess(currCode).then((res) => {
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
          errorMsg = `runZ3Web returned no output or error with input:\n${currCode}`
          newResult.error = errorMsg
          newResult.status = 'buggy-code';
          throw new Error(errorMsg);
        }
      }).catch((error) => {
        // runZ3web fails
        errorMsg = `runZ3Web failed with input:\n${currCode}\n\nerror:\n${error}`;
        newResult.error = errorMsg;
        newResult.status = 'runZ3Web-failed';
        throw new Error(errorMsg);
      }).finally(() => {
        setOutput(newResult);
        setCodeChanged(false);
        setRunFinished(true);
      });

    } : () => { };

  const onDidChangeCode = (code: string) => {
    setCurrCode(code);
    if (outputRendered) setCodeChanged(true);
  };
  const inputNode = <>{code}</>

  return (
    <div>
      {outputRendered ? <div /> : <OutputToggle onClick={onDidClickOutputToggle} />}
      {outputRendered ? <RunButton onClick={onDidClickRun} runFinished={runFinished}/> : <div />}
      <CustomCodeEditor
        children={inputNode}
        input={code}
        id={result.hash}
        showLineNumbers={true}
        onChange={onDidChangeCode}
        editable={outputRendered}
        language={"lisp" as Language}
      />
      {outputRendered ? <Output codeChanged={codeChanged} result={output} /> : <div />}
    </div>
  );
}


