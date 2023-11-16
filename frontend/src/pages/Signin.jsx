import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Signin.module.css";

function Signin() {
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
            style={{ background: "#005b96" }}
          >
            <div className="featured-image mb-3">
              <img
                src="/images/image1.png"
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
              Be Verified
            </p>
            <small
              className={`${styles.mytext} text-white text-wrap text-center`}
              style={{
                width: "17rem",
                fontFamily: "Courier New, Courier, monospace",
              }}
            >
              Your privacy is important to us. We never share your personal
              information.
            </small>
          </div>

          <div className={`${styles.rightclass} col-md-6 right-box`}>
            <div className="row align-items-center">
              <div className={`${styles.headerclass} header-text mb-4`}>
                <h2>Welcome Back!</h2>
                <p>We are delighted to see you again.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Email Address"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Password"
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
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className={`${styles.mybtn} mybtn btn btn-lg w-100 fs-6`}>
                  Login
                </button>
              </div>

              <div className="row">
                <small>
                  Don't have an account? <Link to="/Signup">Sign Up</Link>
                </small>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
}
export default Signin;
