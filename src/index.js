import React from "react";
import { render } from "react-dom";

// //Pages
import Main from "./components/pages/home/Main";
import Appointment from "../src/components/pages/appointment/CalendarPage";
// import Login from "../src/components/pages/Login";
import Adminpage from "./components/pages/Admin/Adminpage";
import Employee from "./components/pages/employee/Employee";
import Customer from "./components/pages/customer/Customer";
import AppointmentRequest from "./components/pages/appointmentDisplayRequests/AppointmentRequest";

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
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/appointments" component={Appointment}></Route>
        <Route exact path="/admin" component={Adminpage}></Route>
        <Route exact path="/employee" component={Employee}></Route>
        <Route exact path="/customer" component={Customer}></Route>
        <Route exact path="/apporeq" component={AppointmentRequest}></Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
