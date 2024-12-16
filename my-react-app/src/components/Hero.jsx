import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    
    "https://via.placeholder.com/1200x500/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/1200x500/FF33A8/FFFFFF?text=Image+4",
    "https://via.placeholder.com/1200x500/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/1200x500/3357FF/FFFFFF?text=Image+3",
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Auto-slide every 3 seconds
//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

  return (
    <div className="hero-container">
      <div className="hero-slider">
        <img
          src={images[currentImageIndex]}
          alt="Hero Image"
          className="hero-image"
        />
      </div>

      {/* Dots for Image Navigation */}
      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
