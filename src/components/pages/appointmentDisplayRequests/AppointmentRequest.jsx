import React, { Component } from "react";
import Sidebar from "../../common/Sidebar";
import MsgCard from "../../common/Cards/Card";
import Breadcrumb from "../../common/Breadcrumb";
class AppointmentRequest extends Component {
  state = { cards: [] };
  componentDidMount() {
    const dummyData = [
      {
        name: "Sefa Çotoğlu",
        title: "Randevu İsteği",
        email: "scotoglu@gmail.com",
        phone: "5302603724",
        date: "21.11.2019",
        description:
          "It is the seventh most populous city in Italy, at the heart of ametropolitan area of about one million people. It is the seventhmost populous city in Italy, at the heart of a metropolitan area of about one million people."
      },
      {
        name: "Sefa Çotoğlu2",
        title: "Randevu İsteği",
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
              isAppointmentCard="1"
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
          <div className="row mt-4 ml-5">
            <div className="col-md-5 ml-5">
              <Breadcrumb
                paths={[
                  {
                    to: "/admin",
                    label: "Yönetim Paneli"
                  },
                  { to: "/apporeq", label: "Randevu Talepleri" }
                ]}
              />
            </div>
          </div>
          <div className="container">{this.state.cards}</div>
        </div>
      </div>
    );
  }
}

export default AppointmentRequest;
