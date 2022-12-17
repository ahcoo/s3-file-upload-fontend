import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
