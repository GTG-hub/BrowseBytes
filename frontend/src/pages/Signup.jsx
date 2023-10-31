import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="myclass">
      <div className="container d-flex justify-content-center align-items-center min vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#103cbe" }}
          >
            <div className="featured-image mb-3">
              <img
                src="images/image.png"
                className="img-fluid"
                style={{ width: "250px" }}
              />
            </div>
            <p
              className="text-white fs-2"
              style={{
                fontFamily: "Courier New, Courier, monospace",
                fontWeight: 600,
              }}
            >
              Get Started
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: "17rem",
                fontFamily: "Courier New, Courier, monospace",
              }}
            >
              Join BrowseBytes and dive into the world of article discovery
              today!
            </small>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Welcome to BrowseBytes!</h2>
                <p>Let's get started on your journey!</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email Address"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    for="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>
                      I accept to the <a href="#">terms of user</a>
                    </small>
                  </label>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Register Now
                </button>
              </div>
              <div className="row">
                <small>
                  Already have an account?
                  <Link to="/">Sign In</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
