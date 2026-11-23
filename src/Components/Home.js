import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Receives bannerImage and foodImage as props.
const Home = ({ bannerImage, foodImage }) => {
  return (
    <section className="hero-section" id="home">
      {/* BACKGROUND IMAGE */}
      {bannerImage && (
        <img src={bannerImage} alt="" className="hero-bg-image" />
      )}

      {/* LEFT SIDE: TEXT */}
      <div className="hero-text">
        {/* SUB LABEL */}
        <p className="sub-label">Fresh & Healthy</p>

        {/* MAIN HEADING */}
        <h1 className="hero-heading">
          Delicious Food <br /> Delivered To Your <br /> Door
        </h1>

        {/* DESCRIPTION */}
        <p className="hero-desc">
          Order fresh, hot meals from the best restaurants near you. 
          Fast delivery, great taste, and amazing prices!
        </p>

        {/* ORDER BUTTON */}
        <button
          className="btn-orange"
          onClick={() => alert("Booking feature coming soon!")}
        >
          Order Now <FaArrowRight />
        </button>
      </div>

      {/* RIGHT SIDE: FOOD IMAGE */}
      {foodImage && (
        <div className="hero-image">
          <img src={foodImage} alt="Delicious Food" />
        </div>
      )}
    </section>
  );
};

export default Home;
