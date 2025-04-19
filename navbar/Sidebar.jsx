import React, { useState } from "react";
import "./sidebar.css";
import logo from "../assets/logo.png"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-item">
          <div onClick={() => toggleSection("jobs")} className="nav-title">
            💼 Jobs
          </div>
          {openSection === "jobs" && <div className="nav-sub">Job Categories...</div>}
        </div>

        <div className="nav-item">
          <div onClick={() => toggleSection("career")} className="nav-title">
            ⭐ Career Compass
          </div>
          {openSection === "career" && <div className="nav-sub">Career Tools...</div>}
        </div>

        <div className="nav-item">
          <div className="nav-title">
            🏆 Contests <span className="badge">NEW</span>
          </div>
        </div>

        <div className="nav-item">
          <div className="nav-title">
            🎓 Degree <span className="badge">NEW</span>
          </div>
        </div>

        <div className="nav-item">
          <div className="nav-title">🔔 Free job alerts on WhatsApp</div>
        </div>

        <hr />

        <div className="nav-item">
          <div className="nav-title">📞 Contact us</div>
        </div>

        <div className="nav-item">
          <div className="nav-title">⬇️ Download Apna app</div>
        </div>

        <div className="nav-item">
          <div onClick={() => toggleSection("login")} className="nav-title">
            👤 Login
          </div>
          {openSection === "login" && <div className="nav-sub">Login Form...</div>}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
