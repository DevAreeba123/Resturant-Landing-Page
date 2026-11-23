import React from "react";

// Explains how the app works.

// Receives images as props.
const Work = ({ pickImage, deliveryImage, chooseImage }) => {
  // Steps data stored in an array of objects.
  const steps = [
    {
      id: 1,
      title: "Choose Your Meal",
      desc: "Browse hundreds of delicious meals from top restaurants near you.",
      image: chooseImage,
      emoji: "🍽️",
    },
    {
      id: 2,
      title: "Pick Your Favorites",
      desc: "Add your favorite dishes to cart and customize your order easily.",
      image: pickImage,
      emoji: "❤️",
    },
    {
      id: 3,
      title: "Fast Delivery",
      desc: "We deliver hot, fresh food to your door in under 30 minutes!",
      image: deliveryImage,
      emoji: "🚀",
    },
  ];

  return (
    <section className="work-section" id="how it works">
      {/* SECTION HEADER */}
      <div className="section-header">
        <p className="sub-label">How It Works</p>
        <h2 className="section-heading">Simple Steps To Get Your Food</h2>
        <p className="section-desc">
          Order your favorite food in just 3 easy steps!
        </p>
      </div>

      {/* STEP CARDS */}
      <div className="work-cards">
        {steps.map((step) => (
          // Renders a card for each step.
          <div key={step.id} className="work-card">
            {/* STEP NUMBER */}
            <div className="step-number">Step {step.id}</div>

            {/* STEP IMAGE OR EMOJI */}
            {step.image ? (
              <img src={step.image} alt={step.title} className="step-image" />
            ) : (
              <div className="step-emoji">{step.emoji}</div>
            )}

            {/* STEP DETAILS */}
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
