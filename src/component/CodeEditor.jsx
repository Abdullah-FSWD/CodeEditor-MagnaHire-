// src/components/CodeEditor.js

import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "60%",
        height: "60%",
        margin: "auto",
      }}>
      <pre
        className="language-javascript"
        style={{
          margin: 0,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f5f5f5",
          minHeight: "200px",
          overflow: "auto",
        }}>
        <code
          className="language-javascript"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages.markup, "markup"),
          }}
        />
      </pre>
      <textarea
        ref={editorRef}
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          backgroundColor: "transparent",
          color: "transparent",
          caretColor: "black",
          fontSize: "16px",
          fontFamily: "monospace",
          resize: "none",
          outline: "none",
          padding: "10px",
          lineHeight: "25px",
        }}
      />
    </div>
  );
};

export default CodeEditor;
