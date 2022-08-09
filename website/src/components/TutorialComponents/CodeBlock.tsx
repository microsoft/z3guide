import React, { useEffect, useState, useRef, useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEditable } from "use-editable";
import codeBlockContentStyles from '@docusaurus/theme-classic/src/theme/CodeBlock/Content/styles.module.css';
import CopyButton from '@theme/CodeBlock/CopyButton';
import Highlight, {
    Prism,
    defaultProps,
    Language,
    PrismTheme,
} from "prism-react-renderer";

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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        </button>
    );
}


// source code of LiveEditor that allows for code editing
// a good starting point for customizing our own code editor

const CodeEditor = (props) => {
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
                language={props.language}
            >
                {({
                    className: _className,
                    tokens,
                    getLineProps,
                    getTokenProps,
                    style: _style,
                }) => (
                    <pre
                        className={_className}
                        style={{
                            margin: 0,
                            outline: "none",
                            padding: 10,
                            fontFamily: "inherit",
                            ...(!props.className || !props.theme ? {} : _style),
                        }}
                        ref={editorRef}
                        spellCheck="false"
                    >
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
                    </pre>
                )}
            </Highlight>
            <div className={codeBlockContentStyles.buttonGroup}>
                <CopyButton className={codeBlockContentStyles.codeButton} code={code} />
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
};

export default CodeEditor;