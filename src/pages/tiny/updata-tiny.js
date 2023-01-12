import React, { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import url from "../../url";

function TinyUpdate() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const editorRef = useRef(null);
  const [content, setContent] = useState();
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/api/tiny/get/${id}`);
      setData(response.data);
    };
    fetchData();
  }, []);

  const updateContent = async () => {
    const data = {
      content: editorRef.current.getContent(),
    };
    await axios.put(`${url}/api/tiny/update/${id}`, data);
    navigate("/");
  };

  return (
    <div className="w-75 mx-auto m-5 p-5">
      <div>
        <h1 className="text-center">Create content with Tiny</h1>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="onvd5of27hr541u7mzbkb92nw6hnee3dy2petdi8eqhokfsj"
          initialValue={data.content}
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
        <button className="btn btn-success m-2" onClick={updateContent}>
          Update
        </button>
      </div>
      {/* <div
        className="p-5 mb-3"
        style={{
          boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div>
          <div className="d-flex">
            <strong>Creator name :</strong>
            {data.createBy}
          </div>
          <div>
            <strong>Creator email :</strong>
            {data.creatorEmail}
          </div>
          <div>
            <strong>Time :</strong>
            {data.createdAt}
          </div>
        </div>
        <hr />
        <div
          className="tiny"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <hr />
      </div> */}
    </div>
  );
}

export default TinyUpdate;
