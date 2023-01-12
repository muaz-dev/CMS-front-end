import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import url from "../../url";

function QuillDetails() {
  let { id } = useParams();
  const [data, setData] = useState("");
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/api/quill/get/${id}`);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-75 mx-auto m-5 p-5">
      <div
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
        <ReactQuill value={data.content} readOnly={true} theme={"bubble"} />
        {/* <div
          className="tiny"
          dangerouslySetInnerHTML={{ __html: data.content }}
        /> */}
        <hr />
      </div>
    </div>
  );
}

export default QuillDetails;
