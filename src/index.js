import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";

//Pages
import Mainpage from "./components/pages/Mainpage";

// Tools
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/style.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//const store = createStore(rootReducer);

render(
  <div style={{ backgroundColor: "#eceae9" }}>
    <Mainpage />
  </div>,
  document.getElementById("root")
);
