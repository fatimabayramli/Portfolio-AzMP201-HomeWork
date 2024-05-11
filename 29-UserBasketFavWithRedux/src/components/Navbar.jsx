import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "../style/navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">My Website</h1>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">Home </a>
            </li>
            <li className="navbar-item">
              <a href="/post" className="navbar-link">Post</a>
            </li>
            <li className="navbar-item">
              <a href="/products" className="navbar-link">Products</a>
            </li>
            <li className="navbar-item">
              <a href="/users" className="navbar-link">Users</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
