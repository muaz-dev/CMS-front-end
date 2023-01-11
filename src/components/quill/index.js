import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  const createContent = async () => {
    const data = {
      content,
      createdAt: new Date(),
      createBy: user.name,
      creatorEmail: user.email,
    };
    await axios.post("http://localhost:8080/api/quill/add-content", data);
    navigate("/");
  };

  return (
    <>
      <div style={{ width: "75%", margin: "5rem auto" }} className="p-5">
        <h1 className="text-center my-3">Create content with Quill</h1>
        <ReactQuill
          className="display-editor-text"
          modules={modules}
          onChange={setContent}
          theme="snow"
        />
        <button className="btn btn-success m-2" onClick={createContent}>
          Create Content
        </button>
        {/* <p>{content}</p>
        <ReactQuill value={content} readOnly={true} theme={"bubble"} /> */}
      </div>
    </>
  );
}
