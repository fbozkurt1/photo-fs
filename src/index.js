import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";

//Pages
import Mainpage from "./components/pages/Mainpage";
import Appointment from "../src/components/pages/Appointment";
import Login from "../src/components/pages/Login";
import Adminpage from "./components/pages/Adminpage";
import Employee from "./components/pages/Employee/Employee";
// Tools
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

import "./assets/css/util.css";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

render(
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Mainpage}></Route>
        <Route exact path="/appointments" component={Appointment}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/admin" component={Adminpage}></Route>
        <Route exact path="/employee" component={Employee}></Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
