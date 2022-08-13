import React, { useEffect, useState, useRef, useCallback, CSSProperties } from "react";
import clsx from "clsx";
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

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-lisp");


export function GithubDiscussionBtn({ repo }) {
    const openInNewTab = () => {
        const url = `https://github.com/${repo}/discussions`;
        window.open(url, '_blank');
    }
    return (
        <button
            type="button"
            aria-label="Go to GitHub discussion"
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


// source code of LiveEditor that allows for code editing
// a good starting point for customizing our own code editor

function CodeEditor(props: {
    className: string,
    code: string,
    disabled: boolean,
    language: string,
    onChange: (code: string) => void,
    // prism: typeof Prism,
    style?: CSSProperties,
    theme: PrismTheme,
    githubRepo: string | undefined,
    showLineNumbers: boolean,
}) {
    const { prism } = useThemeConfig();

    // globalThis.Prism = Prism;

    // prism.additionalLanguages.forEach((lang) => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        // require(`prismjs/components/prism-${lang}`);
    // });

    // delete (globalThis as Global & { Prism?}).Prism;

    const language = props.language;
    const prismTheme = usePrismTheme();

    // debugger;

    const parse: (code: string) => {
        lineClassNames: {
            [lineIndex: number]: string[];
        };
        code: string;
    } = (code: string) => {
        return parseLines(code, {
            metastring: undefined,
            language: language,
            magicComments: prism.magicComments,
        });
    }

    const [parsedRes, setParsedRes] = useState(parse(props.code));

    const editorRef = useRef(null);
    const [currCode, setCode] = useState(parsedRes.code || "");

    useEffect(() => {
        // setCode(props.code);
        setParsedRes(parse(props.code));
    }, [props.code]);

    useEffect(() => {
        setCode(parsedRes.code);
    }, [parsedRes])

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

    console.log(prismTheme)
    return (
        <div className={props.className} style={props.style}>
            <Highlight
                {...defaultProps}
                Prism={Prism}
                code={currCode}
                theme={prismTheme}
                language={language as Language}
            >
                {({
                    className: _className,
                    tokens,
                    getLineProps,
                    getTokenProps,
                    style: _style,
                }) => (
                    <div className={clsx(
                        _className,
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
                                ...(!props.className || !prismTheme ? {} : _style),
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
                                    <span {...getLineProps(
                                        {
                                            line,
                                            // key: `line-${lineIndex}`, 
                                            className: clsx(parsedRes.lineClassNames[lineIndex]),
                                            // className: (!parsedRes.lineClassNames.hasOwnProperty(lineIndex) ? ''
                                            //     : parsedRes.lineClassNames[lineIndex].join(' '))
                                        })
                                    }>
                                        {line
                                            .filter((token) => !token.empty)
                                            .map((token, key) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <span key={key}
                                                    {...getTokenProps({ token, key })}
                                                />
                                            ))}
                                        {"\n"}
                                    </span>
                                ))}
                            </code>
                        </pre>
                    </div>
                )}
            </Highlight>
            <div className={codeBlockContentStyles.buttonGroup}>
                <CopyButton className={codeBlockContentStyles.codeButton} code={currCode} />
                {props.githubRepo && <GithubDiscussionBtn repo={props.githubRepo} />}
            </div>
        </div>
    );
};

export default CodeEditor;