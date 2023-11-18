import React from "react";
import { Profile } from "./pages/Profile";
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import { Home } from "./pages/Home";
import Home2 from "./pages/Home2";
import { SearchResults } from "./pages/Searchresults";
import { Search } from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar1";
import "./css/Navbar.css";
import Gallery from "./pages/Gallery";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ForgetPwd from "./pages/ForgetPwd";
import ResetPwd from "./pages/ResetPwd";
import Summary from "./pages/Summary"
import Search_next from "./pages/Search_next";
import About from "./pages/About"
import NewsComponent from "./pages/NewsComponent";
function App() {
  const { access_token } = useSelector(state=> state.auth)
  console.log(access_token)
  return (
    <div>
      <Router>
    {/* <Navbar/> */}
    {/* <div>Hello</div> */}
        <Routes>
          <Route path="/" element={<Home2/>} />
          <Route path="/Profile" element={access_token?<Profile/>:<Navigate to ="/Signin"/>}/>
          {/* <Route path="/Search_Results" element={<SearchResults/>} /> */}
          <Route path="/Signin" element={!access_token?<Signin/>:<Navigate to ="/Profile"/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Search" element = {<Search/>} />

          <Route path="/forgetpwd" element = {<ForgetPwd/>} />
          <Route path="/api/user/resetpw/:id/:token" element={<ResetPwd/>} />
          <Route path="/summary/:id" element ={<Summary/>} />
          <Route path="/search_next" element = {<Search_next/>} />
          <Route path="/about" element ={<About/>}/>
          <Route path="/news" element={<NewsComponent/>}/>
          <Route path = "*" element={<h1>Error 404 Page Not Found !!</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
