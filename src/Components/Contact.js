import React, { useState } from "react";

// Handles the contact form using useState and events.

const Contact = () => {
  // Stores all form fields.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Tracks form submission status.
  const [submitted, setSubmitted] = useState(false);

  // Handles input changes.
  const handleChange = (event) => {
    setFormData({
      ...formData, // Keeps other fields unchanged.
      [event.target.name]: event.target.value, // Updates the current field.
    });
  };

  // Handles form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload.

    // Checks if all fields are filled.
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return; // Stops the function.
    }

    // Logs form data (API call can be added here).
    console.log("Form submitted:", formData);

    // Updates submission status.
    setSubmitted(true);

    // Resets the form fields.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      {/* SECTION HEADER */}
      <div className="section-header">
        <p className="sub-label">Contact Us</p>
        <h2 className="section-heading">Get In Touch With Us</h2>
        <p className="section-desc">
          Have a question or feedback? We'd love to hear from you!
        </p>
      </div>

      {/* SUCCESS MESSAGE */}
      {submitted ? (
        <div className="success-message">
          <h3>✅ Thank You!</h3>
          <p>We received your message and will get back to you soon.</p>
          <button className="btn-orange" onClick={() => setSubmitted(false)}>
            Send Another
          </button>
        </div>
      ) : (
        /* CONTACT FORM */
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* NAME INPUT */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />

          {/* EMAIL INPUT */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />

          {/* MESSAGE INPUT */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            rows={4}
          />

          {/* SUBMIT BUTTON */}
          <button type="submit" className="btn-orange">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
