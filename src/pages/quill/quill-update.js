import React, { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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

function QuillUpdate() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const editorRef = useRef(null);
  const [content, setContent] = useState();
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/quill/get/${id}`
      );
      setData(response.data);
      setContent(response.data.content);
    };
    fetchData();
  }, []);

  const updateContent = async () => {
    const data = {
      content,
    };
    await axios.put(`http://localhost:8080/api/quill/update/${id}`, data);
    navigate("/");
  };

  return (
    <div className="w-75 mx-auto m-5 p-5">
      <div>
        <h1 className="text-center">Create content with Quill</h1>
        <ReactQuill
          className="display-editor-text"
          modules={modules}
          onChange={setContent}
          value={content}
          theme="snow"
        />
        <button className="btn btn-success m-2" onClick={updateContent}>
          Update
        </button>
      </div>
    </div>
  );
}

export default QuillUpdate;
