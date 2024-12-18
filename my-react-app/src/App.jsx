import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Menu from "./components/Menu";
import MenuSecond from "./components/MenuSecond";
import Hero from "./components/Hero";
import FeaturedComponent from "./components/FeaturedComponent";
import FeaturedCategories from "./components/FeaturedCategories";
import ProductLandingPage from "./components/ProductLandingPage";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <MenuSecond/>
      <Hero/>
      <FeaturedComponent/>
      <FeaturedCategories/>
      <ProductLandingPage/>
      <Footer/>
    </>
  );
}

export default App;
