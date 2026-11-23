import React from "react";
import { FaPlayCircle } from "react-icons/fa";

// Receives aboutImage as a prop.
const About = ({ aboutImage }) => {
  return (
    <section className="about-section" id="about">
      {/* LEFT SIDE: IMAGE */}
      <div className="about-image">
        {aboutImage && <img src={aboutImage} alt="About Foodie" />}
      </div>

      {/* RIGHT SIDE: TEXT */}
      <div className="about-text">
        {/* SUB LABEL */}
        <p className="sub-label">About Us</p>

        {/* MAIN HEADING */}
        <h2 className="section-heading">
          We Are The Best Food <br /> Delivery Service
        </h2>

        {/* DESCRIPTION */}
        <p className="section-desc">
          We started in 2020 with a simple mission: bring amazing food from 
          local restaurants to your home quickly and affordably. Today we 
          serve thousands of happy customers every day!
        </p>

        {/* ACTION BUTTONS */}
        <div className="about-buttons">
          <button className="btn-orange">Learn More</button>

          {/* VIDEO BUTTON */}
          <button className="btn-transparent">
            <FaPlayCircle /> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
