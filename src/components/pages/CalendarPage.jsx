import React, { Component } from "react";
import Scheduler from "../pages/Admin/Calendar";
import Sidebar from "../pages/Admin/Sidebar";
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
      </div>
    </div>
  );
};
export default CalendarPage;
