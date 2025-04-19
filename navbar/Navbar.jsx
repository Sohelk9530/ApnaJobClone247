import React from "react";
import "./navbar.css";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-links">
          <div className="dropdown">
            <button className="dropbtn">Jobs ▾</button>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Career Compass ▾</button>
          </div>
          <a href="#">Contests <span className="new-badge">NEW</span></a>
          <a href="#">Degree <span className="new-badge">NEW</span></a>
        </div>
      </div>

      <div className="navbar-right">
        <a href="#" className="employer-login">Employer Login</a>
        <button className="candidate-login">Candidate Login</button>
      </div>
      <div className="Mobile-section">
      <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;
