import React ,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { storeToken } from '../services/LocalStorageService';
import { CircularProgress } from "@mui/material";
import { useRegisterUserMutation } from "../services/userAuthAPI";
import { getToken } from "../services/LocalStorageService";
import { setToken } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import styles from "./Signup.module.css";
import Navbar from "./Navbar1";
function Signup(){
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2')
    }
    const res = await registerUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data)
      // navigate('/dashboard')
      navigate('/Signin');
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
              <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  name ="name"
                  type="text"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  name="email"
                  type="text"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Email Address"
                />
                {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
              </div>
              <div className="input-group mb-3">
                <input
                  name="password"
                  type="password"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  name="password2"
                  type="password"
                  className={`${styles.formclass} form-control form-control-lg bg-light fs-6`}
                  placeholder="Confirm Password"
                />
                {server_error.non_field_errors ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.non_field_errors[0]}</Typography> : ""}
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
                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                  Register Now
                </button>
              </div>
              </form>
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
    </>
  );
}
export default Signup;
