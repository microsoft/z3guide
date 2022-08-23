import React from "react";

import Editor from "@monaco-editor/react";

export function CodeEditor(props: {
    lang: string;
    code: string;
    readonly: boolean;
    onChange: (code: string) => void;
}) {

    const { lang, code, readonly, onChange } = props;
    function handleEditorChange(value) {
        console.log("new value: ", value);
    }

    const options = {
        readOnly: readonly,
        minimap: { enabled: false },
    };

    return (
        <Editor
            height="50vh"
            defaultLanguage={lang}
            defaultValue={code}
            onChange={onChange}
            options={options}
        />
            <div className={codeBlockContentStyles.buttonGroup}>
                <CopyButton className={codeBlockContentStyles.codeButton} code={props.code} /> 
                {/* {!props.readonly && !allowUndo && <ResetBtn resetCode={onClickReset} />} */}
                {/* {!props.readonly && allowUndo && <UndoBtn undoCode={onClickUndo} />} */}
                {props.githubRepo && <GithubDiscussionBtn repo={props.githubRepo} />}
            </div>
        </div>
    );
}
