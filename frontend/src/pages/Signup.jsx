import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Signup.module.css";

function Signup() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 500 },
  });
  return (
    <animated.div style={fadeIn} div className={styles.myclass}>
      <div className="container d-flex justify-content-center align-items-center min vh-100">
        <animated.div
          style={slideIn}
          className={`${styles.rowclass} row border rounded-5 p-3 bg-white shadow box-area`}
        >
          <div
            className={`${styles.colclass} col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box`}
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
              className={`${styles.mytext} text-white fs-2`}
              style={{
                fontFamily: "Courier New, Courier, monospace",
                fontWeight: 600,
              }}
            >
              Get Started
            </p>
            <small
              className={`${styles.mytext} text-white text-wrap text-center`}
              style={{
                width: "17rem",
                fontFamily: "Courier New, Courier, monospace",
              }}
            >
              Join BrowseBytes and dive into the world of article discovery
              today!
            </small>
          </div>
          <div className={`${styles.rightclass} col-md-6 right-box`}>
            <div className="row align-items-center">
              <div className={`${styles.headerclass} header-text mb-4`}>
                <h2>Welcome to BrowseBytes!</h2>
                <p>Let's get started on your journey!</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Email Address"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
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
                    <small>I accept to the terms of use.</small>
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
                  <Link to="/Signin">Sign In</Link>
                </small>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
}
export default Signup;
