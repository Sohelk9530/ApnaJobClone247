import React from "react";
import "./jobtype.css";

const jobData = [
  {
    id: 1,
    trend: "TRENDING AT #1",
    title: "Jobs for Freshers",
    img: "src/assets/freshers-jobs.webp",
  },
  {
    id: 2,
    trend: "TRENDING AT #2",
    title: "Work from home Jobs",
    img: "src/assets/work-from-home-jobs.webp",
  },
  {
    id: 3,
    trend: "TRENDING AT #3",
    title: "Part time Jobs",
    img: "src/assets/part-time-jobs.webp",
  },
  {
    id: 4,
    trend: "TRENDING AT #4",
    title: "Jobs for Women",
    img: "src/assets/women-jobs.webp",
  },
  {
    id: 5,
    trend: "TRENDING AT #5",
    title: "Full time Jobs",
    img: "src/assets/Full_time_banner_home_page.webp",
  },
];

const Jobtype = () => {
  return (
    <section className="job-types-section">
      <h2 className="section-title">Popular Searches on Apna</h2>
      <div className="job-grid">
        {jobData.map((job) => (
          <div className="job-card" key={job.id}>
            <p className="trend">{job.trend}</p>
            <h3>{job.title}</h3>
            <p className="view-link">View all &gt;</p>
            <img src={job.img} alt={job.title} className="job-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobtype;
