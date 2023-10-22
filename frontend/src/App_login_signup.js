import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./login_signup_pages/Signin";
import Signup from "./login_signup_pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login_signup_pages/signin_style.css";
import "./login_signup_pages/signup_style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
