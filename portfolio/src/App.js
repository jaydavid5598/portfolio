import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Greet from "./components/Greet";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Greet />
      <About />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
