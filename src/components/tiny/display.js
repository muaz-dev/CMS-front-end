import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tiny.css";
import { useNavigate } from "react-router-dom";
import url from "../../url";

function Display() {
  const [data, setData] = useState("");
  const [refresh, setrefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`${url}/api/tiny/get-blogs`);
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [refresh]);
  const deleteContent = async (id) => {
    await axios.delete(`${url}/api/tiny/delete/${id}`);
    setrefresh(!refresh);
  };

  return (
    <div className="w-75 mx-auto mt-3">
      <div className="my-3 d-flex justify-content-between">
        <h3>Contents created with Tiny</h3>
        <button className="btn btn-dark" onClick={() => navigate("/tiny")}>
          Create Content
        </button>
      </div>

      {data &&
        data.map((el) => {
          return (
            <div
              className="p-5 mb-3"
              style={{
                boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
              key={el.id}
            >
              <div>
                <div className="d-flex">
                  <strong>Creator name :</strong>
                  {el.createBy}
                </div>
                <div>
                  <strong>Creator email :</strong>
                  {el.creatorEmail}
                </div>
                <div>
                  <strong>Time :</strong>
                  {el.createdAt}
                </div>
              </div>
              <hr />
              <div
                className="tiny tiny-max"
                dangerouslySetInnerHTML={{ __html: el.content }}
              />
              <hr />
              <div className="d-flex justify-content-around">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    navigate(`/tiny/${el.id}`);
                  }}
                >
                  See details
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    navigate(`/tiny/update/${el.id}`);
                  }}
                >
                  Upbate
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteContent(el.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Display;
