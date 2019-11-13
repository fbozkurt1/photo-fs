import React, { Component } from "react";
import Sidebar from "./Admin/Sidebar";
import MsgCard from "./Admin/Cards/Card";

class DisplayMessage extends Component {
  state = { cards: [] };

  componentDidMount() {
    const dummyData = [
      {
        name: "Sefa Çotoğlu",
        title: "İletişim İsteği",
        email: "scotoglu@gmail.com",
        phone: "5302603724",
        date: "21.11.2019",
        description:
          "It is the seventh most populous city in Italy, at the heart of ametropolitan area of about one million people. It is the seventhmost populous city in Italy, at the heart of a metropolitan area of about one million people."
      },
      {
        name: "Sefa Çotoğlu2",
        title: "İletişim İsteği",
        email: "scotoglu@gmail.com",
        phone: "5302603724",
        date: "21.11.2019",
        description:
          "It is the seventh most populous city in Italy, at the heart of ametropolitan area of about one million people. It is the seventhmost populous city in Italy, at the heart of a metropolitan area of about one million people."
      }
    ];

    let cardData = dummyData.map(elem => {
      return (
        <div className="row mt-5 justify-content-center">
          <div className="col-md-10">
            <MsgCard
              name={elem.name}
              title={elem.title}
              email={elem.email}
              phone={elem.phone}
              date={elem.date}
              description={elem.description}
              isAppointmentCard="0"
              feedbackPoint="0"
            />
          </div>
        </div>
      );
    });
    this.setState({ cards: cardData });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 align-item-center">
          <div className="container">{this.state.cards}</div>
        </div>
      </div>
    );
  }
}

export default DisplayMessage;
