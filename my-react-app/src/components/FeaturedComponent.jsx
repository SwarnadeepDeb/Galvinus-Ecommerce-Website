import React from "react";
import "./FeaturedComponent.css"; // Include custom styles if necessary

const FeaturedComponent = () => {
  return (
    <div className="featured-container">
    <div className="main-featured-container">
      {/* First p tag */}
      <p className="woodmart-collections">WOODMART COLLECTIONS</p>

      {/* Main heading */}
      <h1 className="featured-categories">FEATURED CATEGORIES</h1>

      {/* Description */}
      <p className="woodmart-description">
        WoodMart is a powerful eCommerce theme for WordPress
      </p>

      {/* Images section */}
      <div className="images-container">
        {/* Large image that spans two rows */}
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2016/06/cat-23-430x430.jpg" 
          alt="Featured 1"
          className="image-item large-image"
        />
        {/* Small images */}
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2016/06/cat-klock-430x430.jpg" 
          alt="Category 1"
          className="image-item small-image"
        />
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2016/06/cat-clock-3-430x430.jpg" 
          alt="Category 2"
          className="image-item small-image"
        />
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2016/06/light-cat-5-430x430.jpg" 
          alt="Category 3"
          className="image-item small-image"
        />
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2016/06/Toys-cat-1-430x430.jpg" 
          alt="Category 4"
          className="image-item small-image"
        />
      </div>
    </div>
    </div>
  );
};

export default FeaturedComponent;
