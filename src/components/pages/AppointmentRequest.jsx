import React, { Component } from "react";
import Sidebar from "./Admin/Sidebar";
import MsgCard from "./Admin/Cards/AppointmentCard";

class AppointmentRequest extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 align-item-center">
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-md-6">
                <MsgCard
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  appoDate="21.11.2019"
                  description="It is the seventh most populous city in Italy, at the heart of a
            metropolitan area of about one million people. It is the seventh
            most populous city in Italy, at the heart of a metropolitan area of
            about one million people."
                />
              </div>
              <div className="col-md-6">
                <MsgCard
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  appoDate="21.11.2019"
                  description="It is the seventh most populous city in Italy, at the heart of a
            metropolitan area of about one million people. It is the seventh
            most populous city in Italy, at the heart of a metropolitan area of
            about one million people."
                />
              </div>
            </div>

            <div className="row mt-5 justify-content-center">
              <div className="col-md-10">
                <MsgCard
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  appoDate="21.11.2019"
                  description="It is the seventh most populous city in Italy, at the heart of a
            metropolitan area of about one million people. It is the seventh
            most populous city in Italy, at the heart of a metropolitan area of
            about one million people."
                />
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-10">
                <MsgCard
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  appoDate="21.11.2019"
                  description="It is the seventh most populous city in Italy, at the heart of a
            metropolitan area of about one million people. It is the seventh
            most populous city in Italy, at the heart of a metropolitan area of
            about one million people."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentRequest;
