import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// ==============================
// TESTIMONIAL COMPONENT
// ==============================
// Customers ke reviews dikhata hai
// useState se current review track karta hai

const Testimonial = ({ johnImage }) => {
  // Sabhi reviews ka data - array of objects
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
      image: null, // koi image nahi toh initials dikhate hain
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

  // currentIndex = abhi konsa review dikh raha hai (0, 1, ya 2)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next review dikhane ka function
  const goToNext = () => {
    // Agar last review hai toh pehle pe wapas jao, warna agle pe jao
    if (currentIndex === reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Previous review dikhane ka function
  const goToPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(reviews.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Current review jo dikhana hai
  const current = reviews[currentIndex];

  return (
    <section className="testimonial-section" id="testimonials">
      {/* Section Header */}
      <div className="section-header">
        <p className="sub-label">Testimonials</p>
        <h2 className="section-heading">What Our Customers Say</h2>
      </div>

      {/* Review Card */}
      <div className="review-card">
        {/* Stars */}
        <div className="stars">
          {/* Array(5) se 5 stars banate hain */}
          {Array(current.stars)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
        </div>

        {/* Review Text */}
        <p className="review-text">"{current.review}"</p>

        {/* Reviewer Info */}
        <div className="reviewer">
          {/* Image ya initials */}
          {current.image ? (
            <img src={current.image} alt={current.name} className="reviewer-img" />
          ) : (
            <div className="reviewer-initials">
              {current.name.charAt(0)} {/* Pehla letter */}
            </div>
          )}
          <h4>{current.name}</h4>
        </div>

        {/* Navigation Buttons */}
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