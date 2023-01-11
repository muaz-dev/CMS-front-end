import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Tiny from "./pages/tiny";
import Ckeditor from "./pages/ckeditor";
import Quill from "./pages/quill";
import Home from "./pages/home";
import SignIn from "./pages/login";
import TinyDetails from "./pages/tiny/tiny-details";
import UpdateTiny from "./pages/tiny/updata-tiny";
import QuillDetails from "./pages/quill/quill-details";
import UpdateQuill from "./pages/quill/quill-update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ckeditor" element={<Ckeditor />} />
        <Route path="/tiny" element={<Tiny />} />
        <Route path="/quill" element={<Quill />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/tiny/:id" element={<TinyDetails />} />
        <Route path="/tiny/update/:id" element={<UpdateTiny />} />
        <Route path="/quill/:id" element={<QuillDetails />} />
        <Route path="/quill/update/:id" element={<UpdateQuill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
