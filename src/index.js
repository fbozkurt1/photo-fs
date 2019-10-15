import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";

// Created Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Tools
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/style.css";

//const store = createStore(rootReducer);

render(
  <div style={{ backgroundColor: "#eceae9" }}>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Footer />
  </div>,
  document.getElementById("root")
);
