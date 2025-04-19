import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo-social">
          <img src="src/assets/logo.png" alt="apna logo" className="apna-logo" />
          <div>
            <p className="follow-text">Follow us on social media</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2025 Apna | All rights reserved ScienceDev247</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="app-box">
          <h4>Apply on the go</h4>
          <p>Get real time job updates on our App</p>
          <div className="app-download">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="playstore"
            />
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://apna.co"
              alt="QR code"
              className="qr"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
