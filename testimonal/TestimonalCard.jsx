import React from "react";
import "./testimonal.css";

const TestimonialCard = ({name,img,desc}) => {
  return (
    <div className="testimonial-card">
      <div className="top-section">
        <img
          src={img} // Replace with actual image URL
          alt="Shiwangi Singla"
          className="profile-pic"
        />
        <div className="info">
          <div className="name-row">
            <h3>{name}</h3>
            <span className="badge">🟢 PLACED</span>
          </div>
          <div className="rating">
            <strong>4.5</strong>
            <span className="stars">
              ⭐ ⭐ ⭐ ⭐ <span className="half-star">⭐</span>
            </span>
          </div>
        </div>
      </div>
      <p className="testimonial-message">
    {desc}
      </p>
    </div>
  );
};

export default TestimonialCard;
