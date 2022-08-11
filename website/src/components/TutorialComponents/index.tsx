import React, { useState } from "react";
import clsx from "clsx";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { type Props } from "@theme/CodeBlock";
import { ThemeClassNames, usePrismTheme } from "@docusaurus/theme-common";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Container from "@theme/CodeBlock/Container";
import CodeEditor from './CodeBlock';
import codeBlockContainerStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Container/styles.module.css';
import codeBlockContentStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Content/styles.module.css';
import styles from "./styles.module.css";


// [CONFIG HERE] custom language run process (client side) imports
import runZ3Web from "./runZ3Web";
import runZ3JSWeb from "./runZ3JSWeb";

// [CONFIG HERE] language-process mapping
const clientConfig = {
  'z3': runZ3Web,
  'z3-js': runZ3JSWeb,
};

interface MyProps extends Props {
  readonly id: string;
  readonly input: string;
  readonly language?: string;
  readonly editable?: boolean;
  readonly onChange?: (code: string) => void;
  readonly githubRepo?: string,
  readonly readonly?: boolean,
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
      {runFinished ? "Run" : "Running..."}
    </button>
  );
}


function Output({ result, codeChanged, statusCodes }) {
  const success = result.status === statusCodes.success;
  const emptyOutput = result.output === "";
  return (
    <div>
      <b>Output{codeChanged ? " (outdated)" : ""}:</b>
      <br />
      <pre className={codeChanged ? styles.outdated : ""}>
        {success ? (
          ""
        ) : (
          <span style={{ color: "red" }}>
            <b>Error: </b>
            <br />
          </span>
        )}
        {success
          ? emptyOutput
            ? "--Output is empty--"
            : result.output
          : result.error}
      </pre>
    </div>
  );
}

function CustomCodeEditor(props: MyProps) {
  const { id, input, language, showLineNumbers, editable, githubRepo, readonly, onChange } = props;

  const prismTheme = usePrismTheme();
  // console.log(prismTheme);
  // the line above shows that we are still using `plain` for syntax highlighting
  // despite that we have imported the language highlighting at the beginning
  const isBrowser = useIsBrowser();

  const component = (
    <Container
      as="pre"
      className={clsx(
        (editable ? styles.editable : ""),
        codeBlockContainerStyles.codeBlockContainer,
        ThemeClassNames.common.codeBlock,
      )}
    >
      <CodeEditor
        code={input}
        theme={prismTheme}
        disabled={!editable}
        key={String(isBrowser)}
        className={codeBlockContentStyles.codeBlockContent}
        onChange={onChange}
        language={language}
        //@ts-ignore
        githubRepo={githubRepo}
        readonly={readonly}
        showLineNumbers={showLineNumbers}
      />
    </Container>
  );

  // const component = <CodeBlock language="lisp">{input}</CodeBlock>

  return <>{isBrowser ? component : <></>}</>;
}

export default function CustomCodeBlock({ input }) {
  const { lang, highlight, statusCodes, code, result, githubRepo, editable, readonly, showLineNumbers } = input

  const [currCode, setCurrCode] = useState(code);

  const [codeChanged, setCodeChanged] = useState(false);

  const [outputRendered, setOutputRendered] = useState(false);

  const [runFinished, setRunFinished] = useState(true);

  const [output, setOutput] = useState(result);

  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  // bypassing server-side rendering
  const onDidClickRun = ExecutionEnvironment.canUseDOM
    ? () => {
      setRunFinished(false);
      // TODO: only load z3 when needed
      const newResult = { ...result };
      let errorMsg;

      const runProcess = clientConfig[lang];
      // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
      runProcess(currCode)
        .then((res) => {
          const result = JSON.parse(res);
          if (result.output) {
            const errRegex = new RegExp(
              /(\(error)|(unsupported)|([eE]rror:)/g
            );
            const hasError = result.output.match(errRegex);
            newResult.output = hasError ? "" : result.output;
            newResult.error = hasError ? result.output : "";
            newResult.status = hasError
              ? statusCodes.runtimeError
              : statusCodes.success;
          } else if (result.error) {
            newResult.error = result.error;
            newResult.status = statusCodes.runError;
          }
        })
        .catch((error) => {
          // runProcess fails
          errorMsg = `${lang}-web failed with input:\n${currCode}\n\nerror:\n${error}`;
          newResult.error = errorMsg;
          newResult.status = `${lang}-web-failed`;
          throw new Error(errorMsg);
        })
        .finally(() => {
          setOutput(newResult);
          setCodeChanged(false);
          setRunFinished(true);
          if (!outputRendered) {
            setOutputRendered(true); // hack for the playground editor
          }
        });
    }
    : () => { };

  const onDidChangeCode = (code: string) => {
    setCurrCode(code);
    if (outputRendered) setCodeChanged(true);
  };
  const inputNode = <>{code}</>;

  return (
    <div>
      <CustomCodeEditor
        children={inputNode}
        input={code}
        id={result.hash}
        showLineNumbers={showLineNumbers}
        onChange={onDidChangeCode}
        editable={editable || outputRendered}
        language={highlight}
        githubRepo={githubRepo}
        readonly={readonly}
      />
      {readonly ?
        <></> :
        <>
          <div className={styles.buttons}>
            {editable || outputRendered ? (
              <div />
            ) : (
              <OutputToggle onClick={onDidClickOutputToggle} />
            )}
            {editable || outputRendered ? (
              <RunButton onClick={onDidClickRun} runFinished={runFinished} />
            ) : (
              <div />
            )}
          </div>
          {outputRendered ? (
            <Output
              codeChanged={codeChanged}
              result={output}
              statusCodes={statusCodes}
            />
          ) : (
            <div />
          )}
        </>}

    </div>
  );
}

export { GithubDiscussionBtn } from './CodeBlock';
