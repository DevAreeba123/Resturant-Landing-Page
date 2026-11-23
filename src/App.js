import React from "react";
import "./App.css";

//components 
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Import images from Assets folder 
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
      <Navbar />

      {/* Home - images passing through props */}
      <Home bannerImage={BannerBg} foodImage={FoodImage} />
      <About aboutImage={AboutImg} />
      <Work
        pickImage={PickImg}
        deliveryImage={DeliveryImg}
        chooseImage={ChooseImg}
      />
      {/* Testimonial - reviewer image */}
      <Testimonial johnImage={JohnImg} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


