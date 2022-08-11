import React, { useEffect, useState, useRef, useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEditable } from "use-editable";
import codeBlockContentStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Content/styles.module.css';
import { useThemeConfig, usePrismTheme } from "@docusaurus/theme-common";
// @ts-ignore: the import is actually correct
import { parseLines } from '@docusaurus/theme-common/internal';
import CopyButton from '@theme/CodeBlock/CopyButton';
import Highlight, {
    defaultProps,
    Language,
    PrismTheme,
} from "prism-react-renderer";
import styles from "./styles.module.css";
import prismIncludeLanguages from '@theme/prism-include-languages';

import Prism from "prism-react-renderer/prism";
// prismIncludeLanguages(Prism);

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

const CodeEditor = (props) => {
    const { prism } = useThemeConfig();

    globalThis.Prism = Prism;

    prism.additionalLanguages.forEach((lang) => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        require(`prismjs/components/prism-${lang}`);
    });

    delete (globalThis as Global & { Prism?}).Prism;

    const language = props.language;
    const prismTheme = usePrismTheme();

    debugger;
    let parsedResult = parseLines(props.code, {
        metastring: undefined,
        language: language,
        magicComments: prism.magicComments,
    });

    const editorRef = useRef(null);
    const [currCode, setCode] = useState(parsedResult.code || "");

    useEffect(() => {
        parsedResult = parseLines(props.code, {
            metastring: undefined,
            language: language,
            magicComments: prism.magicComments,
        });
        setCode(parsedResult.code);
    }, [parsedResult.code]);

    const onEditableChange = useCallback((_code) => {
        setCode(_code.slice(0, -1));
    }, []);

    useEditable(editorRef, onEditableChange, {
        disabled: props.disabled,
        indentation: 2,
    });

    useEffect(() => {
        if (props.onChange) {
            props.onChange(currCode);
        }
    }, [currCode]);


    console.log(parsedResult.lineClassNames)

    return (
        <div className={props.className} style={props.style}>
            <Highlight
                {...defaultProps}
                Prism={Prism}
                code={currCode}
                theme={prismTheme}
                language={language}
            >
                {({
                    className: _className,
                    tokens,
                    getLineProps,
                    getTokenProps,
                    style: _style,
                }) => (
                    <div style={{ display: "flex" }}>
                        {props.showLineNumbers ?
                            <div className={`${styles.LineNumber}`}>
                                {tokens.map((line, i) => (
                                    <>{i + 1}<br /></>
                                ))}
                            </div> : <></>}
                        <pre
                            className={_className}
                            style={{
                                margin: 0,
                                outline: "none",
                                padding: "0",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                ...(!props.className || !prismTheme ? {} : _style),
                            }}
                            ref={editorRef}
                            spellCheck="false"
                        >
                            <div>
                                {tokens.map((line, lineIndex) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div {...getLineProps({ line, key: `line-${lineIndex}`, className: (!parsedResult.lineClassNames.hasOwnProperty(lineIndex) ? '' : parsedResult.lineClassNames[lineIndex].join(' ')) })}>
                                        {line
                                            .filter((token) => !token.empty)
                                            .map((token, tokenIndex) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span key={`token-${tokenIndex}`}
                                                    {...getTokenProps({ token, key: `token-${tokenIndex}` })}
                                                />
                                            ))}
                                        {"\n"}
                                    </div>
                                ))}
                            </div>
                        </pre>
                    </div>
                )}
            </Highlight>
            <div className={codeBlockContentStyles.buttonGroup}>
                <CopyButton className={codeBlockContentStyles.codeButton} code={currCode} />
                {props.readonly ? <></> : <ResetBtn resetCode={setCode} input={props.code} />}
                {props.githubRepo ? (
                    <GithubDiscussionBtn repo={props.githubRepo} />
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
};

CodeEditor.propTypes = {
    className: PropTypes.string,
    code: PropTypes.string,
    disabled: PropTypes.bool,
    language: PropTypes.string,
    onChange: PropTypes.func,
    prism: PropTypes.object,
    style: PropTypes.object,
    theme: PropTypes.object,
    readonly: PropTypes.bool,
    showLineNumbers: PropTypes.bool,
};

export default CodeEditor;