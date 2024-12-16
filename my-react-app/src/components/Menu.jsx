import React, { useState } from "react";
import "./Menu.css";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"; // Using react-icons for icons

const Menu = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Search Text: ", searchText);
    console.log("Selected Category: ", category);
  };

  return (
    <div className="menu-container">
      <div className="menu-main-content">
        {/* Logo Section */}
        <div className="logo-container">
          <i class="fa-solid fa-tree"></i>
          <h1 className="logo">woodmart.</h1>
        </div>

        {/* Search Bar Section */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="category-dropdown"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
          </select>
          <button className="search-btn" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        {/* Login/Register Section */}
        <div className="auth-container">
          <a className="auth-btn">Login</a> /
          <a className="auth-btn">Register</a>
        </div>

        {/* Icons Section */}
        <div className="icons-container">
          <FaHeart className="icon heart-icon" />
          <FaShoppingCart className="icon cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
