// ==============================
// APP.JS - Main File
// ==============================
// Ye file saare components ko ek jagah jodti hai
// Yahan se images import hoti hain aur props ke through pass hoti hain

import React from "react";
import "./App.css";

// Saare components import kar rahe hain
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Images import kar rahe hain Assets folder se
// Agar aapki image ka naam alag hai toh yahan change karo
import BannerBg from "./Assets/home-banner-background.png";
import FoodImage from "./Assets/home-banner-image.png";
import AboutImg from "./Assets/about-background-image.png";
import PickImg from "./Assets/pick-meals-image.png";
import DeliveryImg from "./Assets/delivery-image.png";
import ChooseImg from "./Assets/choose-image.png";
import JohnImg from "./Assets/john-doe-image.png";

function App() {
  return (
    <div className="App">
      {/* Navbar - koi props nahi chahiye */}
      <Navbar />

      {/* Home - images props ke through pass kar rahe hain */}
      <Home bannerImage={BannerBg} foodImage={FoodImage} />

      {/* About - about image pass kar rahe hain */}
      <About aboutImage={AboutImg} />

      {/* Work/How it works - 3 images pass kar rahe hain */}
      <Work
        pickImage={PickImg}
        deliveryImage={DeliveryImg}
        chooseImage={ChooseImg}
      />

      {/* Testimonial - reviewer image pass kar rahe hain */}
      <Testimonial johnImage={JohnImg} />

      {/* Contact - koi images nahi chahiye */}
      <Contact />

      {/* Footer - koi props nahi chahiye */}
      <Footer />
    </div>
  );
}

export default App;


