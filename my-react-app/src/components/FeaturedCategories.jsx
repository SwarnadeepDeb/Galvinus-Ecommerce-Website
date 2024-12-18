import React, { useState } from "react";
import "./FeaturedCategories.css"; // Include custom styles if necessary

const FeaturedCategories = () => {

  return (
    <div className="featured-categories-container">
      <div className="main-featured-categories-container">
        {/* Title and Description */}
        <p className="wooden-accessories">WOODEN ACCESSORIES</p>
        <h1 className="featured-products">FEATURED PRODUCTS</h1>
        <p className="shop-description">
          Visit our shop to see amazing creations from our designer
        </p>

        {/* Buttons for Best Sellers, Featured, and Sales */}
        <div className="buttons-container">
          <button className="category-button">BEST SELLERS</button>
          <button className="category-button">FEATURED</button>
          <button className="category-button">SALES</button>
        </div>

        {/* Grid of Cards representing Featured Products */}
        <div className="products-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="product-card" key={index}>
              <img
                src="https://woodmart.b-cdn.net/wp-content/uploads/2016/09/product-furniture-4-3-430x491.jpg" // Replace with actual image URL
                alt={`Product ${index + 1}`}
                className="product-image"
              />
              <h3 className="product-title">Product {index + 1}</h3>
              <p className="product-price">$49.99</p>
              <button className="view-details-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
