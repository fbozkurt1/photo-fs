import React, { Component } from "react";

// Created Components
import Navbar from "../sections/Navbar";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

class Mainpage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Mainpage;
