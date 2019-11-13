import React, { Component } from "react";
import Sidebar from "./Admin/Sidebar";
import MessageCard from "./Admin/Cards/MessageCards";
class DisplayMessage extends Component {
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
                <MessageCard
                  msgType="1"
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  message="Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem Ipsum has
               been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  point="50"
                />
              </div>
              <div className="col-md-6">
                <MessageCard
                  msgType="0"
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  message="Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem Ipsum has
               been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  point="50"
                />
              </div>
            </div>

            <div className="row mt-5 justify-content-center">
              <div className="col-md-10">
                <MessageCard
                  msgType="1"
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  message="Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem Ipsum has
               been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  point="50"
                />
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-10">
                <MessageCard
                  msgType="0"
                  name="Sefa ÇOTOĞLU"
                  email="scotoglu@gmail.com"
                  phone="5302603724"
                  message="Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem Ipsum has
               been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  point="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayMessage;
