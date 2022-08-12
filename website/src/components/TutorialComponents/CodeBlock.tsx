import React, { useEffect, useState, useRef, useCallback, CSSProperties } from "react";
import clsx from "clsx";
import { useEditable } from "use-editable";
import codeBlockContentStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Content/styles.module.css';
import CopyButton from '@theme/CodeBlock/CopyButton';
import Highlight, {
    Prism,
    defaultProps,
    Language,
    PrismTheme,
} from "prism-react-renderer";
import styles from "./styles.module.css";


export function GithubDiscussionBtn({ repo }) {
    const openInNewTab = () => {
        const url = `https://github.com/${repo}/discussions`;
        window.open(url, '_blank');
    }
    return (
        <button
            type="button"
            aria-label="Go to GitHub discussion"
            title="Go to GitHub discussion"
            className={clsx(
                'clean-btn',
                codeBlockContentStyles.codeButton
            )}
            onClick={openInNewTab}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
        </button>
    );
}

export function ResetBtn({ resetCode, input }) {
    return (
        <button
            type="button"
            aria-label="Reset code"
            title="Reset code"
            className={clsx(
                'clean-btn',
                codeBlockContentStyles.codeButton
            )}
            onClick={() => resetCode(input)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
            </svg>
        </button>
    );
}

// source code of LiveEditor that allows for code editing
// a good starting point for customizing our own code editor

function CodeEditor(props: {
    className: string,
    code: string,
    disabled: boolean,
    language: string,
    onChange: (code: string) => void,
    prism: typeof Prism,
    style?: CSSProperties,
    theme: PrismTheme,
    githubRepo: string | undefined,
    showLineNumbers: boolean,
    readonly: boolean,
}) {
    const editorRef = useRef(null);
    const [code, setCode] = useState(props.code || "");

    useEffect(() => {
        setCode(props.code);
    }, [props.code]);

    const onEditableChange = useCallback((_code) => {
        setCode(_code.slice(0, -1));
    }, []);

    useEditable(editorRef, onEditableChange, {
        disabled: props.disabled,
        indentation: 2,
    });

    useEffect(() => {
        if (props.onChange) {
            props.onChange(code);
        }
    }, [code]);

    //   prismIncludeLanguages(Prism);

    return (
        <div className={props.className} style={props.style}>
            <Highlight
                Prism={props.prism || Prism}
                code={code}
                theme={props.theme}
                language={props.language as Language}
            >
                {({
                    className: _className,
                    tokens,
                    getLineProps,
                    getTokenProps,
                    style: _style,
                }) => (
                    <div className={clsx(
                        styles.CustomCodeEditorContent,
                        codeBlockContentStyles.codeBlockContent,
                    )}>
                        {props.showLineNumbers &&
                            <span className={clsx(
                                styles.LineNumber, 
                                // codeBlockLineNumberStyles.codeLineNumber,
                                codeBlockContentStyles.codeBlockLines
                                )}>
                                {tokens.map((line, i) => (
                                    <>{i + 1}<br /></>
                                ))}
                            </span>}
                        <pre
                            className={clsx(
                                _className,
                                styles.codeBlock, 
                                'thin-scrollbar')}
                            style={{
                                // margin: 0,
                                // outline: "none",
                                padding: "0",
                                // fontFamily: "inherit",
                                // fontSize: "inherit",
                                ...(!props.className || !props.theme ? {} : _style),
                            }}
                            ref={editorRef}
                            spellCheck="false"
                        >
                            <code
                                className={clsx(
                                    codeBlockContentStyles.codeBlockLines,
                                )}>
                                {tokens.map((line, lineIndex) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div {...getLineProps({ line, key: `line-${lineIndex}` })}>
                                        {line
                                            .filter((token) => !token.empty)
                                            .map((token, tokenIndex) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span
                                                    {...getTokenProps({ token, key: `token-${tokenIndex}` })}
                                                />
                                            ))}
                                        {"\n"}
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>
                )}
            </Highlight>
            <div className={codeBlockContentStyles.buttonGroup}>
                <CopyButton className={codeBlockContentStyles.codeButton} code={code} />
                {props.readonly ? <></> : <ResetBtn resetCode={setCode} input={props.code} />}
                {props.githubRepo && <GithubDiscussionBtn repo={props.githubRepo} />}
            </div>
        </div>
    );
};

export default CodeEditor;