import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <ReactQuill value={editorContent} onChange={handleChange} theme="snow" />
      <div>
        <h2>Editor Content</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

export default TextEditor;
