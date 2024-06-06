import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const home = document.getElementById('app');
    const starCount = 100; // Number of stars

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      // Random positions
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      // Random animation duration and delay for more realistic effect
      star.style.animationDuration = (Math.random() * 2 + 1) + 's';
      star.style.animationDelay = Math.random() * 3 + 's';
      home.appendChild(star);
    }
  }, []);

  return (
    <Router basename="/qcc-ase-p2">
      <div id="app">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
