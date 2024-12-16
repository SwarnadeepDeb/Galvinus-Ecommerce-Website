import React, { useState } from "react";
import "./MenuSecond.css";
import { FaBars, FaCaretDown } from "react-icons/fa";

const NewMenu = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Browse Categories");

  const handleHamburgerClick = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="menu--container">
      <div className="second-menu-container">
        {/* Browse Categories and Hamburger Menu */}
        <div className="browse-categories-container">
          <button className="hamburger-menu" onClick={handleHamburgerClick}>
            <FaBars />
          </button>
          <select
            className="categories-dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Browse Categories">Browse Categories</option>
            <option value="Furniture">Furniture</option>
            <option value="Cooking">Cooking</option>
            <option value="Accessories">Accessories</option>
            <option value="Fashion">Fashion</option>

            <option value="Clocks">Clocks</option>
            <option value="Lighting">Lighting</option>
            <option value="Toys">Toys</option>

            <option value="Hand Made">Hand Made</option>
            <option value="Minimalism">Minimalism</option>
            <option value="Electronics">Electronics</option>

            <option value="Car">Car</option>
          </select>
        </div>

        {/* Separate Dropdowns for Home, Shops, Blog, Pages, Elements */}
        <div className="dropdowns-container">
          <div className="dropdown-item">
            <select className="dropdown">
              <option>Home</option>
            </select>
          </div>
          <div className="dropdown-item">
            <select className="dropdown">
              <option>Shops</option>
            </select>
          </div>
          <div className="dropdown-item">
            <select className="dropdown">
              <option>Blog</option>
            </select>
          </div>
          <div className="dropdown-item">
            <select className="dropdown">
              <option>Pages</option>
            </select>
          </div>
          <div className="dropdown-item">
            <select className="dropdown">
              <option>Elements</option>
            </select>
          </div>
          <a className="buy-btn">Buy</a>
        </div>

        {/* Special Offer and Purchase Theme Button */}
        <div className="offer-container">
          <span className="special-offer-text">Special Offer</span>
          <span>|</span>
          <button className="purchase-btn">Purchase Theme</button>
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
