import React from "react";
import { FaPlayCircle } from "react-icons/fa";

// ==============================
// ABOUT COMPONENT
// ==============================
// Ye "About Us" section hai
// Props use kar rahe hain image pass karne ke liye

const About = ({ aboutImage }) => {
  return (
    <section className="about-section" id="about">
      {/* ---- LEFT SIDE: Image ---- */}
      <div className="about-image">
        {aboutImage && <img src={aboutImage} alt="About Foodie" />}
      </div>

      {/* ---- RIGHT SIDE: Text ---- */}
      <div className="about-text">
        {/* Orange label */}
        <p className="sub-label">About Us</p>

        {/* Heading */}
        <h2 className="section-heading">
          We Are The Best Food <br /> Delivery Service
        </h2>

        {/* Description */}
        <p className="section-desc">
          We started in 2020 with a simple mission: bring amazing food from 
          local restaurants to your home quickly and affordably. Today we 
          serve thousands of happy customers every day!
        </p>

        {/* Two buttons */}
        <div className="about-buttons">
          <button className="btn-orange">Learn More</button>

          {/* Play button for video */}
          <button className="btn-transparent">
            <FaPlayCircle /> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;