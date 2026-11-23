import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

// ==============================
// FOOTER COMPONENT
// ==============================
// Page ka sabse neeche wala section
// Logo, links aur social media icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* ---- LEFT SIDE: Logo + Social Icons ---- */}
      <div className="footer-left">
        <div className="footer-logo">🍕 FOODIE</div>
        <p className="footer-tagline">Fresh food, fast delivery.</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>

      {/* ---- RIGHT SIDE: Links in columns ---- */}
      <div className="footer-links">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>Company</h4>
          <span>About Us</span>
          <span>Careers</span>
          <span>Blog</span>
          <span>Press</span>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Help</h4>
          <span>FAQ</span>
          <span>Contact</span>
          <span>Support</span>
          <span>Track Order</span>
        </div>

        {/* Column 3 */}
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