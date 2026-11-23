import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

// Displays the footer with logo, links, and social icons.

const Footer = () => {
  return (
    <footer className="footer">
      {/* LEFT SIDE: LOGO AND SOCIAL ICONS */}
      <div className="footer-left">
        <div className="footer-logo">🍕 FOODIE</div>
        <p className="footer-tagline">Fresh food, fast delivery.</p>

        {/* SOCIAL MEDIA ICONS */}
        <div className="social-icons">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>

      {/* RIGHT SIDE: FOOTER LINKS */}
      <div className="footer-links">
        {/* COMPANY LINKS */}
        <div className="footer-column">
          <h4>Company</h4>
          <span>About Us</span>
          <span>Careers</span>
          <span>Blog</span>
          <span>Press</span>
        </div>

        {/* HELP LINKS */}
        <div className="footer-column">
          <h4>Help</h4>
          <span>FAQ</span>
          <span>Contact</span>
          <span>Support</span>
          <span>Track Order</span>
        </div>

        {/* LEGAL LINKS */}
        <div className="footer-column">
          <h4>Legal</h4>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
