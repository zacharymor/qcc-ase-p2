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


function App() {
  return (
    <Router basename="/qcc-ase-p2">
      <div>
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
