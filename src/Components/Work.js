import React from "react";

// ==============================
// WORK COMPONENT - "How It Works"
// ==============================
// Ye section batata hai app kaise kaam karta hai
// Yahan hum ek array of objects use karenge - props ki jagah

const Work = ({ pickImage, deliveryImage, chooseImage }) => {
  // Steps ki list - array of objects
  // Har object mein: number, title, description, image
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
      {/* Section Header */}
      <div className="section-header">
        <p className="sub-label">How It Works</p>
        <h2 className="section-heading">Simple Steps To Get Your Food</h2>
        <p className="section-desc">
          Order your favorite food in just 3 easy steps!
        </p>
      </div>

      {/* Cards - steps.map() se automatically 3 cards ban jayenge */}
      <div className="work-cards">
        {steps.map((step) => (
          // Har step ke liye ek card
          <div key={step.id} className="work-card">
            {/* Step number badge */}
            <div className="step-number">Step {step.id}</div>

            {/* Emoji or Image */}
            {step.image ? (
              <img src={step.image} alt={step.title} className="step-image" />
            ) : (
              <div className="step-emoji">{step.emoji}</div>
            )}

            {/* Text */}
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;