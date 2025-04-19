import React from "react";
import "./testimonal.css";

const Testimonial_desc = () => {
  return (
    <div className="testimonial-container">
      <div className="quote-icon">“</div>
      <h2 className="testimonial-text">
        Join the community <br />
        of 5 crore satisfied <br />
        job seekers...
      </h2>
      <div className="rating-row">
        <span className="rating-label">Play Store Ratings</span>
        <div className="stars">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span className="half-star">⭐</span>
        </div>
      </div>
    </div>
  );
};
export default Testimonial_desc;

