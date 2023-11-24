import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Link as Link2} from 'react-scroll';
import { useState ,useEffect, useRef } from 'react'
import "../css/Navbar.css"
import img1 from "../images/person_logo.png"
import { getToken } from '../services/LocalStorageService';
import { FaUserTie } from 'react-icons/fa';
export default function Navbar() {
  const navigate = useNavigate();
  const {access_token} = getToken()
  return (
    <div>

      <nav className="navbar fixed-top d-flex m-2">
  <div className="container-fluid pr-8">
  {access_token?<a type = "button" href="/Profile" className="w-10 text-3xl text-black"><FaUserTie/></a>:<a type = "button" href="/Signin" className="button3">Login/Register</a>}
    
    <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BrowseBytes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">Our Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Profile">My Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">Trending Articles</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
