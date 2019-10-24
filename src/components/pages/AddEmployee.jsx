import React, { Component } from "react";
import Sidebar from "./Admin/Sidebar";
import EmployeeReg from "../forms/RegisterEmployee";
class AddEmployee extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row mt-5">
              <EmployeeReg />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
