import React from "react";
import "./jobopen.css";

const companies = [
  {
    id: 1,
    name: "Paytm Service Pvt. Ltd.",
    desc: "Digital payment and e-commerce facilitator.",
    logo: "https://img.icons8.com/?size=100&id=u4pEVcYmUnAE&format=png",
  },
  {
    id: 2,
    name: "Zomato",
    desc: "Online food delivery marketplace.",
    logo: "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png",
  },
  {
    id: 3,
    name: "Swiggy",
    desc: "Food delivery and online ordering platform.",
    logo: "https://img.icons8.com/?size=96&id=M8M9YjBrtUkd&format=png",
  },
];

const Jobopen = () => {
  return (
    <section className="top-companies-section">
      <h2 className="top-title">Job Openings in Top companies</h2>
      <div className="company-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h3 className="company-name">{company.name}</h3>
            <p className="company-desc">{company.desc}</p>
            <a className="company-link" href="#">View jobs &gt;</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobopen;
