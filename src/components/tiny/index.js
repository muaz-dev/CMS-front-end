import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [content, setContent] = useState();
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setContent(editorRef.current.getContent());
    }
  };

  const createContent = async () => {
    const data = {
      content: editorRef.current.getContent(),
      createdAt: new Date(),
      createBy: user.name,
      creatorEmail: user.email,
    };
    console.log(data);
    await axios.post("http://localhost:8080/api/tiny/add-content", data);
    navigate("/");
  };
  return (
    <>
      <div>
        <h1 className="text-center m-5">Create content with Tiny</h1>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="onvd5of27hr541u7mzbkb92nw6hnee3dy2petdi8eqhokfsj"
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor image code",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste tinymcespellchecker",
              "image",
            ],
            toolbar:
              "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | spellchecker  ",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button className="btn btn-success m-2" onClick={createContent}>
          Create content
        </button>
        {/* <button onClick={log}>Log editor content</button> */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
