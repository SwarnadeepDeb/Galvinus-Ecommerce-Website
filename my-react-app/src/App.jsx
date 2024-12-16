import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Menu from "./components/Menu";
import MenuSecond from "./components/MenuSecond";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <MenuSecond/>
      <Hero/>
    </>
  );
}

export default App;
