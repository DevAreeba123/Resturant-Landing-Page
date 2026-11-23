import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

// ==============================
// NAVBAR COMPONENT
// ==============================
// Ye component top navigation bar banata hai
// Desktop pe links dikhata hai
// Mobile pe hamburger menu dikhata hai

const Navbar = () => {
  // useState hook - mobile menu open hai ya band, ye track karta hai
  // openMenu = current value (true ya false)
  // setOpenMenu = value change karne ka function
  const [openMenu, setOpenMenu] = useState(false);

  // Navbar ke links ki list
  const navLinks = ["Home", "About", "How It Works", "Testimonials", "Contact"];

  return (
    <nav className="navbar">
      {/* ---- LOGO ---- */}
      <div className="nav-logo">
        🍕 <span>FOODIE</span>
      </div>

      {/* ---- DESKTOP LINKS (bade screen pe dikhte hain) ---- */}
      <div className="nav-links">
        {/* map() se har link automatically ban jata hai */}
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}

        {/* Cart Icon */}
        <a href="#cart" className="cart-icon">
          <BsCart2 />
        </a>

        {/* Button */}
        <button className="btn-white">Book Now</button>
      </div>

      {/* ---- MOBILE HAMBURGER ICON (choti screen pe dikhta hai) ---- */}
      <div className="hamburger">
        {/* Jab click ho toh menu kholo */}
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* ---- MOBILE MENU (jab openMenu = true ho tab dikhta hai) ---- */}
      {openMenu && (
        <div className="mobile-menu">
          {/* Close button */}
          <HiXMark className="close-icon" onClick={() => setOpenMenu(false)} />

          {/* Mobile links */}
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpenMenu(false)} // link click karne par menu band ho
            >
              {link}
            </a>
          ))}
          <button className="btn-orange">Book Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;