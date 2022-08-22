import React from "react";

import Editor from "@monaco-editor/react";

export function CodeEditor() {
  function handleEditorChange(value) {
    console.log("new value: ", value);
  }

  return (
   <Editor
     height="50vh"
     defaultLanguage="lisp"
     defaultValue={"(echo \"Hello World\")"}
     onChange={handleEditorChange}
   />
  );
}
