import React from "react";
import "./hero.css";
import Heroimg from "../assets/Heroimg.webp"
import aicte from "../assets/aicte.avif"
import DPIIT from "../assets/DPIIT.webp"
import GOVT from "../assets/GOVT.webp"



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="platform-label">INDIA’S #1 JOB PLATFORM</p>
        <h1>Your job search ends here</h1>
        <p className="subheading">Discover 50 lakh+ career opportunities</p>

        <div className="search-bar">
          <input type="text" placeholder="🔍 Search jobs by 'skill'" />
          <select>
            <option>Your Experience</option>
            <option>Fresher</option>
            <option>1-3 Years</option>
            <option>3+ Years</option>
          </select>
          <input type="text" placeholder="📍 Search for an area or city" />
          <button>Search jobs</button>
        </div>

        <div className="support-text">
          <p><strong>Proud to Support</strong></p>
          <div className="logos">
            <img src={GOVT} alt="Govt" />
            <img src={aicte} alt="AICTE" />
            <img src={DPIIT} alt="DPIIT" />
          </div>

          <p className="trusted-text">
            Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
          </p>

          <div className="company-logos">
            <img src="https://www.bajajgroup.company/wp-content/uploads/2024/05/30-04-2024-Bajaj-Allianz-General-Insurance-launches-Premium-Programme-for-high-value-customers.png" alt="Bajaj" />
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart" />
            <img src="https://img-cdn.thepublive.com/filters:format(webp)/afaqs/media/post_attachments/bea6f5ece28790fd3a6491768ecc8390142052b823a9eb7096d182cdcce89fd7.jpg" alt="BigBasket" />
            <img src="https://i.pinimg.com/736x/cc/15/74/cc1574e6b15ed8aa8a7759c2c9220429.jpg" alt="HDFC" />
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={Heroimg} alt="Apna App Promo" />
      </div>
    </section>
  );
};

export default Hero;
