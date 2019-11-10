import React, { Component } from "react";
import Sidebar from "./Admin/Sidebar";
import CardView from "./Admin/CardView";
import TempDataTable from "./Admin/TempDataTable";
import Scheduler from "./Admin/Calendar";
import Footer from "../sections/Footer";
import Progress from "../forms/formComponents/Progress";
class Adminpage extends Component {
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
              <div className="col-md-3">
                <CardView
                  type="card bg-primary text-white"
                  iconT="fas fa-comment"
                  cardF="card-footer bg-primary text-white"
                  text="Mesajınız var!"
                />
              </div>
              <div className="col-md-3">
                <CardView
                  type="card bg-primary text-white"
                  iconT="fas fa-comment"
                  cardF="card-footer bg-primary text-white"
                  text="Mesajınız var!"
                />
              </div>
              <div className="col-md-3">
                <CardView
                  type="card bg-primary text-white"
                  iconT="fas fa-comment"
                  cardF="card-footer bg-primary text-white"
                  text="Mesajınız var!"
                />
              </div>
            </div>
            <div className="row mt-5">
              <TempDataTable />
            </div>
            <div className="row mt-5">
              <div className="col">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminpage;
