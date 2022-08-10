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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
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