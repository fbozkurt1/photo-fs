import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";

//Pages
import Mainpage from "./components/pages/Mainpage";
import Appointment from "../src/components/pages/Appointment";
import Login from "../src/components/pages/Login";
// Tools
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/style.css";
import "./assets/css/login.css";
import "./assets/js/main.js";
import "./assets/css/util.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//const store = createStore(rootReducer);

render(
  <div style={{ backgroundColor: "#eceae9" }}>
    <Router>
      <Switch>
        <Route exact path="/" component={Mainpage}></Route>
        <Route exact path="/appointments" component={Appointment}></Route>
        <Route exact path="/Login" component={Login}></Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
