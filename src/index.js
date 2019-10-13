import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/style.css";

//const store = createStore(rootReducer);

render(
  <div>
    <Navbar />
    <Home />
    <About />
    <Services />
  </div>,
  document.getElementById("root")
);
