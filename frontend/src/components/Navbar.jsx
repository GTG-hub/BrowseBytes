import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiar fixed" style={{background: '#011f4b'}}>
  <div class="container-fluid">
    <a class="navbar-brand" style={{color: 'white'}} href="/">Home</a>
    <button class="navbar-toggler" style={{color: 'white', background: 'white'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    {/* <button class="navbar-toggler" style={{color: 'white', background: 'white'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"> */}
      <span style={{color: 'white'}} class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BrowseBytes</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signin">Sign In</a>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Action</a></li>
              <li><a class="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn" style={{background: '#011f4b', color:'white'}} type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    )
}