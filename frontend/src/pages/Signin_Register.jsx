import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Signin_Register() {
  useEffect(() => {
    const myLink = document.getElementById("my_link");
    const myLabel = document.getElementById("my_label");

    const handleClick = () => {
      myLabel.click();
    };
    myLink.addEventListener("click", handleClick);
    return () => {
      myLink.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="myclass">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form action="/">
            <label for="chk" aria-hidden="true" id="my_label">
              Sign Up
            </label>
            <input type="text" name="txt" placeholder="User Name" required="" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required=""
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              id=""
              required=""
            />
            <input
              type="password"
              name="pswd"
              placeholder="Confirm Password"
              id=""
              required=""
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="login">
          <form action="/">
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required=""
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required=""
            />
            <button>Login</button>
            <p>
              New here?{" "}
              <a href="#" id="my_link">
                Create an account
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signin_Register;
