import React, { useState } from "react";
import "./importantLinks.css";

const jobLinks = [
  "Jobs in Agra", "Jobs in Ajmer", "Jobs in Asansol", "Jobs in Belagavi",
  "Jobs in Ahmedabad", "Jobs in Aligarh", "Jobs in Aurangabad", "Jobs in Bengaluru",
  "Jobs in Ahmednagar", "Jobs in Amritsar", "Jobs in Bareilly", "Jobs in Bhavnagar",
  // Add more if needed
];

const Link_comp = ({job_title}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleLinks = showAll ? jobLinks : jobLinks.slice(0, 12);

  return (
    <div className="important-links">
      <h3>{job_title}</h3>
      <div className="link-grid">
        {visibleLinks.map((link, index) => (
          <a href="#" key={index}>{link}</a>
        ))}
      </div>
      <div className="toggle-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "View Less ▲" : "View More ▼"}
      </div>
    </div>
  );
};

export default Link_comp;
