import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TinyDetails() {
  let { id } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/tiny/get/${id}`
      );
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
        <div
          className="tiny"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <hr />
      </div>
    </div>
  );
}

export default TinyDetails;
