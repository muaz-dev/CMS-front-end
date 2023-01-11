import React, { useState } from "react";
import axios from "axios";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      alert("The credential is not correct");
    } else
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        localStorage.setItem("user", JSON.stringify(doc.data()));
        navigate("/");
      });
  };

  return (
    <div className="text-center">
      <form
        className="mx-auto w-50"
        style={{ marginTop: "150px" }}
        onSubmit={handleSubmit}
      >
        <label className="form-label">
          Email:
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="btn btn-dark w-25" type="submit">
          Login
        </button>
      </form>
      <div className="p-5">
        <h5>Available users</h5>
        <p>Email : kan@gmail.com // password : 123456</p>
        <p>Email : mali@gmail.com // password : 123456</p>
        <p>Email : tito@gmail.com // password : 123456</p>
      </div>
    </div>
  );
}

export default LoginPage;
