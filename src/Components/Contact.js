import React, { useState } from "react";

// ==============================
// CONTACT COMPONENT
// ==============================
// Ye contact form hai
// useState se form data track karta hai
// Event handling se form submit karta hai

const Contact = () => {
  // Form ka data track karna - ek object mein saara data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Kya form submit hua? Success message dikhane ke liye
  const [submitted, setSubmitted] = useState(false);

  // Input change hone par ye function chalta hai
  // Event Handling - onChange event
  const handleChange = (event) => {
    // event.target.name = input ka name attribute
    // event.target.value = jo type kiya
    setFormData({
      ...formData, // baaki fields same rakhna (spread operator)
      [event.target.name]: event.target.value, // sirf ye field update karo
    });
  };

  // Form submit hone par ye function chalta hai
  const handleSubmit = (event) => {
    event.preventDefault(); // Page reload rokna

    // Validation - kya saari fields bhari hain?
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return; // function rok do
    }

    // Yahan normally API call hoti - filhaal console mein dikhate hain
    console.log("Form submitted:", formData);

    // Success state set karo
    setSubmitted(true);

    // Form reset karo
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      {/* Section Header */}
      <div className="section-header">
        <p className="sub-label">Contact Us</p>
        <h2 className="section-heading">Get In Touch With Us</h2>
        <p className="section-desc">
          Have a question or feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Agar form submit hua toh thank you dikhao */}
      {submitted ? (
        <div className="success-message">
          <h3>✅ Thank You!</h3>
          <p>We received your message and will get back to you soon.</p>
          <button className="btn-orange" onClick={() => setSubmitted(false)}>
            Send Another
          </button>
        </div>
      ) : (
        /* Form */
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange} // har key press pe handleChange chale
            className="form-input"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            rows={4}
          />

          {/* Submit Button */}
          <button type="submit" className="btn-orange">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;