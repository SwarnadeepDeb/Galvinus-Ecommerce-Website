import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://woodmart.xtemos.com/wp-content/uploads/2021/04/blog-title-bg6-opt.jpg",
    // "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    // "https://via.placeholder.com/1200x500/FF5733/FFFFFF?text=Image+1",
    // "https://via.placeholder.com/1200x500/33FF57/FFFFFF?text=Image+2",
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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
