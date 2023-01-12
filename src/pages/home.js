import { useState, useEffect } from "react";
import Tiny from "../components/tiny/display";
import Quill from "../components/quill/display";
import Ckeditor from "../components/ckeditor/display";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate("/sign-in");
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = ["Tiny", "Quill"];

  const signOut = (e) => {
    localStorage.clear();
    navigate("/sign-in");
  };

  return (
    <>
      <div>
        <button className="btn btn-dark" onClick={signOut}>
          Sign out
        </button>

        <span className="ms-2"> Sing in Email : {user ? user.email : ""}</span>
      </div>

      <div className="w-75 mx-auto">
        <div className="w-75 mx-auto d-flex justify-content-around mt-5">
          {navigation.map((x, index) => (
            <button
              className="btn btn-success"
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
        <hr className="m-3" />
        <div>
          {activeIndex === 0 && <Tiny />}
          {activeIndex === 1 && <Quill />}
          {activeIndex === 2 && <Ckeditor />}
        </div>
      </div>
    </>
  );
}

export default Home;
