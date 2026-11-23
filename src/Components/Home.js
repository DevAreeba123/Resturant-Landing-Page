import React from "react";
import { FaArrowRight } from "react-icons/fa";

// ==============================
// HOME (HERO) COMPONENT
// ==============================
// Ye page ka pehla section hai jo user ko dikhta hai
// Ek bada heading, kuch text, aur ek button hota hai

// Props receive kar rahe hain - bannerImage aur foodImage
// Props = parent component se data aata hai
const Home = ({ bannerImage, foodImage }) => {
  return (
    <section className="hero-section" id="home">
      {/* Background decorative image (right side pe) */}
      {bannerImage && (
        <img src={bannerImage} alt="" className="hero-bg-image" />
      )}

      {/* ---- LEFT SIDE: Text ---- */}
      <div className="hero-text">
        {/* Chota orange label */}
        <p className="sub-label">Fresh & Healthy</p>

        {/* Bada heading */}
        <h1 className="hero-heading">
          Delicious Food <br /> Delivered To Your <br /> Door
        </h1>

        {/* Description text */}
        <p className="hero-desc">
          Order fresh, hot meals from the best restaurants near you. 
          Fast delivery, great taste, and amazing prices!
        </p>

        {/* Button - onClick pe alert dikhata hai (event handling example) */}
        <button
          className="btn-orange"
          onClick={() => alert("Booking feature coming soon!")}
        >
          Order Now <FaArrowRight />
        </button>
      </div>

      {/* ---- RIGHT SIDE: Food Image ---- */}
      {foodImage && (
        <div className="hero-image">
          <img src={foodImage} alt="Delicious Food" />
        </div>
      )}
    </section>
  );
};

export default Home;