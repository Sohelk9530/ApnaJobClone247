import React from "react";
import "./downloadApp.css";

const DownloadApp = () => {
  return (
    <div className="download-section">
      <div className="left-content">
        <h2>Download Apna app!</h2>
        <p className="subtext">
          Unlimited job applications | HRs contact you directly | Track your Applications
        </p>
        <div className="qr-box">
          <span>Scan QR to download Apna app</span>
          <img
            src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fapp-qr.png&w=256&q=75" // Replace with real QR
            alt="QR Code"
          />
        </div>
      </div>

      <div className="right-content">
        <img
          src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/apna-app.png" // Replace with real app image
          alt="App Screenshot"
          className="app-image"
        />
        <div className="stats-box">
          <div className="stat">
            <span className="icon">⭐</span>
            <div>
              <strong>4.4</strong>
              <p>5L reviews</p>
            </div>
          </div>
          <div className="stat">
            <span className="icon">📥</span>
            <div>
              <strong>1 cr+</strong>
              <p>App downloads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
