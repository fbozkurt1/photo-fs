import React, { Component } from "react";
import Scheduler from "./Calendar";
import Sidebar from "../../common/Sidebar";
import Footer from "../../pages/home/sections/Footer";
const CalendarPage = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <div className="container">
          <div className="row mt-5">
            <Scheduler />
          </div>
        </div>
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;
