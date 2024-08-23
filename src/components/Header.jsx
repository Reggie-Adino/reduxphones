import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from "./buttons/Login"
import Signup from "./buttons/Signup"

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to = "/"  aria-current="page" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to = "/product" href="#">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = "/about" href="#">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = "/contact" href="#">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand mx-auto fw-bold" to="/">
      APPLE MART
      <Login />
      <Signup />
      </NavLink>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header