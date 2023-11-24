import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../services/userAuthAPI";
import { storeToken, getToken } from '../services/LocalStorageService';
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import { CircularProgress } from "@mui/material";
import { setToken } from "../features/authSlice";
import { useSpring, animated } from "react-spring";
import styles from "./Signin.module.css";
import Navbar from "./Navbar1";
// import { useDispatch } from "react-redux";

function Signin() {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  const res={}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      console.log(res.error)
      // console.log(typeof (res.error.data.errors))
      console.log(res.error.data)
      setServerError(res.error.data)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data)
      let { access_token } = getToken()
      dispatch(setToken({access_token: access_token}));
      navigate('/')
    }
  }
  let { access_token } = getToken()
  useEffect(()=>{
    dispatch(setToken({access_token: access_token}))
  }, [access_token, dispatch])


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
    <>
    <Navbar/>
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
                src="/images/image.png"
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
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  name ="email"
                  type="text"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Email Address"
                />
                {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>Enter a valid email</Typography> : ""}
              </div>
              <div className="input-group mb-1">
                <input
                  name = "password"
                  type="password"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Password"
                />
                {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                {/* <div className="form-check"> */}
                  {/* <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  /> */}
                  {/* <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label> */}
                {/* </div> */}
                <div className="forgot">
                  <small>
                    {/* <a href="#">Forgot Password?</a> */}
                    <Link to="/forgetpwd">Forgot Password?</Link>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                {isLoading ? <CircularProgress/>:<button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>}
              </div>
              </form>
              {server_error.error?<Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>Email or password is invalid</Typography>:""}
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
    </>
  );
}
export default Signin;
