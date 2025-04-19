import React from "react";
import "./importantLinks.css";

const OtherLinks = () => {
  return (
    <div className="other-links">
      <div className="link-column">
        <h4>Links</h4>
        <a href="#">Download Apna App</a>
        <a href="#">Free Job Alerts</a>
        <a href="#">Careers</a>
        <a href="#">Contact Us</a>
        <a href="#">Vulnerability Disclosure Policy</a>
      </div>

      <div className="link-column">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">User Terms & Conditions</a>
      </div>

      <div className="link-column">
        <h4>Resources</h4>
        <a href="#">Blog</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  );
};

export default OtherLinks;
