import React, { useState } from "react";
import clsx from "clsx";
import { ThemeClassNames, usePrismTheme } from "@docusaurus/theme-common";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Container from "@theme/CodeBlock/Container";
import CodeEditor from './CodeBlock';
import codeBlockContainerStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Container/styles.module.css';
import codeBlockContentStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Content/styles.module.css';
import styles from "./styles.module.css";


import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-lisp");


// [CONFIG HERE] custom language run process (client side) imports
import runZ3Web from "./runZ3Web";
import runZ3JSWeb from "./runZ3JSWeb";
import runZ3DuoWeb from "./runZ3DuoWeb";

// [CONFIG HERE] language-process mapping
const clientConfig = {
  'z3': runZ3Web,
  'z3-js': runZ3JSWeb,
  'z3-duo': runZ3DuoWeb,
};

interface CodeBlockProps {
  lang: string,
  highlight: string,
  statusCodes: { [key: string]: string },
  code: string,
  result: { [key: string]: string },
  githubRepo: string | undefined,
  editable: boolean,
  showLineNumbers: boolean,
  readonly: boolean,
  langVersion?: string,
  tool?: string,
}

function OutputToggle(props: { onClick: () => void, disabled?: boolean, version?: string, tool?: string }) {
  const { onClick } = props;

  return (
    <button className="button button--primary" onClick={onClick}>
      Run
    </button>
  );
}

function RunButton(props: { onClick: () => Promise<void>, runFinished: boolean, isZ3Duo: boolean }) {
  const { onClick, runFinished, isZ3Duo } = props;
  const text = isZ3Duo ? "Check" : "Run";
  return (
    <button className="button button--primary" onClick={async() => await onClick()}>
      {runFinished ? text : "Running..."}
    </button>
  );
}


function Output(props: {
  result: { [key: string]: string | Array<string> },
  codeChanged: boolean,
  statusCodes: { [key: string]: string }
}) {
  const { result, codeChanged, statusCodes } = props;
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
            <b>Script contains one or more errors: </b>
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

function CustomCodeEditor(props: {
  id: string,
  input: string,
  showLineNumbers?: boolean,
  language?: string,
  editable?: boolean,
  onChange?: (code: string) => void,
  githubRepo: string | undefined,
  readonly: boolean,
}) {
  const { input, language, showLineNumbers, editable, githubRepo, onChange, readonly } = props;

  const prismTheme = usePrismTheme();
  // console.log(prismTheme);
  // the line above shows that we are still using `plain` for syntax highlighting
  // despite that we have imported the language highlighting at the beginning
  const isBrowser = useIsBrowser();

  const component = (
    <Container
      as="div"
      className={clsx(
        (editable ? styles.editable : ""),
        codeBlockContainerStyles.codeBlockContainer,
        ThemeClassNames.common.codeBlock,
        language && `language-${language}`,
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
        prism={Prism}
        githubRepo={githubRepo}
        readonly={readonly}
        showLineNumbers={showLineNumbers}
      />
    </Container>
  );

  return <>{isBrowser ? component : <></>}</>;
}

export default function CustomCodeBlock(props: { input: CodeBlockProps }) {
  const { input } = props;
  const { lang, highlight, statusCodes, code, result, githubRepo, editable, showLineNumbers, readonly } = input

  const isZ3Duo = lang === "z3-duo";


  const [currCode, setCurrCode] = useState(code);

  const [codeChanged, setCodeChanged] = useState(false);

  const [outputRendered, setOutputRendered] = useState(false);

  const [runFinished, setRunFinished] = useState(true);

  const [output, setOutput] = useState(result);

  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  // bypassing server-side rendering
  const onDidClickRun = async () => {
    setRunFinished(false);
    // TODO: only load z3 when needed
    const newResult = { ...result };
    let errorMsg: string;

    const runProcess = clientConfig[lang];
    // const z3DuoCode = `const s1 = new Z3.Solver()
    // const s2 = new Z3.Solver()
    // s1.from_string(user_input)
    // s2.from_string(secret_input)
    // const not_user = Z3.Not(Z3.And(s1.assertions()))
    // const not_secret = Z3.Not(Z3.And(s2.assertions()))
    // s2.add(not_user)
    // s1.add(not_secret)
    // const secret_not_user = await s2.check()
    // const user_not_secret = await s1.check()
    // if (secret_not_user == "sat")
    //     // say   s2.model().sexpr() satisfies secret but not user formula
    // if (user_not_secret == "sat")
    //    // etc`;

    let input = currCode;
    let process = isZ3Duo ? runProcess(input, result.output) : runProcess(input);

    // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
    try {
      let res: string = await process;
      const result = JSON.parse(res);
      console.log(res)
      if (result.output !== '') {
        const errRegex = /(\(error)|(unsupported)|([eE]rror:)/;
        const hasError = errRegex.test(result.output);
        newResult.output = hasError ? "" : result.output;
        newResult.error = hasError ? result.output : "";
        newResult.status = hasError
          ? statusCodes.runtimeError
          : statusCodes.success;
      } else if (result.error !== '') {
        newResult.error = result.error;
        newResult.status = statusCodes.runError;
      }
    } catch (error) {
      errorMsg = `${lang}-web failed with input:\n${currCode}\n\nerror:\n${error}`;
      newResult.error = errorMsg;
      newResult.status = `${lang}-web-failed`;
      throw new Error(errorMsg);
    } finally {
      setOutput(newResult);
      setCodeChanged(false);
      setRunFinished(true);
      if (!outputRendered) {
        setOutputRendered(true); // hack for the playground editor
      }
      console.log('i am clicked')
    }

    // runProcess(input)
    //   .then((res: string) => {
    //     const result = JSON.parse(res);
    //     if (result.output !== '') {
    //       const errRegex = /(\(error)|(unsupported)|([eE]rror:)/;
    //       const hasError = errRegex.test(result.output);
    //       newResult.output = hasError ? "" : result.output;
    //       newResult.error = hasError ? result.output : "";
    //       newResult.status = hasError
    //         ? statusCodes.runtimeError
    //         : statusCodes.success;
    //     } else if (result.error !== '') {
    //       newResult.error = result.error;
    //       newResult.status = statusCodes.runError;
    //     }
    //   })
    //   .catch((error: Error) => {
    //     // runProcess fails
    //     errorMsg = `${lang}-web failed with input:\n${currCode}\n\nerror:\n${error}`;
    //     newResult.error = errorMsg;
    //     newResult.status = `${lang}-web-failed`;
    //     throw new Error(errorMsg);
    //   })
    //   .finally(() => {
    //     setOutput(newResult);
    //     setCodeChanged(false);
    //     setRunFinished(true);
    //     if (!outputRendered) {
    //       setOutputRendered(true); // hack for the playground editor
    //     }
    //   });
  };

  const onDidChangeCode = (code: string) => {
    setCurrCode(code);
    if (outputRendered) setCodeChanged(true);
  };


  return (
    <div>
      <CustomCodeEditor
        input={code}
        id={result.hash}
        showLineNumbers={showLineNumbers}
        onChange={onDidChangeCode}
        editable={editable || outputRendered}
        language={highlight}
        githubRepo={githubRepo}
        readonly={readonly}
      />
      <>
        <div className={styles.buttons}>
          {(!isZ3Duo && !readonly && !editable && !outputRendered) && <OutputToggle onClick={onDidClickOutputToggle} />}
          {(isZ3Duo || !readonly && (editable || outputRendered)) && <RunButton isZ3Duo={isZ3Duo} onClick={onDidClickRun} runFinished={runFinished} />}
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
      </>
    </div>
  );
}

export { GithubDiscussionBtn } from './CodeBlock';
