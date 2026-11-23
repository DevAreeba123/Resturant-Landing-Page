import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

// NAVBAR COMPONENT
// Shows desktop links and a mobile menu.

const Navbar = () => {
  // Tracks whether the mobile menu is open or closed.
  const [openMenu, setOpenMenu] = useState(false);

  // Navigation links.
  const navLinks = ["Home", "About", "How It Works", "Testimonials", "Contact"];

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        🍕 <span>FOODIE</span>
      </div>

      {/* DESKTOP LINKS */}
      <div className="nav-links">
        {/* Renders all navigation links using map(). */}
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}

        {/* CART ICON */}
        <a href="#cart" className="cart-icon">
          <BsCart2 />
        </a>

        {/* BOOK NOW BUTTON */}
        <button className="btn-white">Book Now</button>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="hamburger">
        {/* Opens the mobile menu on click. */}
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="mobile-menu">
          {/* CLOSE BUTTON */}
          <HiXMark className="close-icon" onClick={() => setOpenMenu(false)} />

          {/* MOBILE LINKS */}
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpenMenu(false)} // Closes menu on click.
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
