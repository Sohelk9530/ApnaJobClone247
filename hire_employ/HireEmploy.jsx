import React from "react";
import "./hireEmploy.css";

const HireEmploy = () => {
  return (
    <div className="hire-section">
      <div className="hire-image">
        <img
          src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/two-people.png" // Replace with actual image
          alt="Employers"
        />
      </div>
      <div className="hire-content">
        <div className="tag">APNA FOR EMPLOYERS</div>
        <h2>Want to hire?</h2>
        <p>Find the best candidate from 5 crore+ active job seekers!</p>
        <button className="hire-button">
          Post job <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default HireEmploy;
