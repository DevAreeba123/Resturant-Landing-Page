
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// TESTIMONIAL COMPONENT
// Displays customer reviews using useState.

const Testimonial = ({ johnImage }) => {
  // Reviews stored in an array of objects.
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Amazing food and super fast delivery! I order from Foodie every week. The quality is always perfect and the app is so easy to use!",
      stars: 5,
      image: johnImage,
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      review:
        "Best food delivery app I have ever used! The food always arrives hot and fresh. Highly recommend to everyone!",
      stars: 5,
      image: null, // Shows initials if no image is available.
    },
    {
      id: 3,
      name: "Ali Hassan",
      review:
        "Great variety of restaurants and the prices are very reasonable. Delivery is always on time. 10/10!",
      stars: 4,
      image: null,
    },
  ];

  // Tracks the current review index.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shows the next review.
  const goToNext = () => {
    if (currentIndex === reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Shows the previous review.
  const goToPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(reviews.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Gets the current review.
  const current = reviews[currentIndex];

  return (
    <section className="testimonial-section" id="testimonials">
      {/* SECTION HEADER */}
      <div className="section-header">
        <p className="sub-label">Testimonials</p>
        <h2 className="section-heading">What Our Customers Say</h2>
      </div>

      {/* REVIEW CARD */}
      <div className="review-card">
        {/* STAR RATING */}
        <div className="stars">
          {/* Renders stars based on the rating. */}
          {Array(current.stars)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
        </div>

        {/* REVIEW TEXT */}
        <p className="review-text">"{current.review}"</p>

        {/* REVIEWER DETAILS */}
        <div className="reviewer">
          {/* Shows image or initials. */}
          {current.image ? (
            <img src={current.image} alt={current.name} className="reviewer-img" />
          ) : (
            <div className="reviewer-initials">
              {current.name.charAt(0)} {/* First letter */}
            </div>
          )}
          <h4>{current.name}</h4>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="review-nav">
          <button onClick={goToPrev} className="nav-btn">← Prev</button>
          <span>
            {currentIndex + 1} / {reviews.length}
          </span>
          <button onClick={goToNext} className="nav-btn">Next →</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
