import React, { Component } from "react";

class ContactBox extends Component {
  state = {};
  render() {
    const values = this.props;
    const isAppointment =
      this.props.title === "Randevu" ? (
        <a href="#" className="btn-custom">
          {" "}
          Randevu Al <i className="ml-2"></i>{" "}
        </a>
      ) : (
        values.value
      );
    return (
      <div className="col-md-3 d-flex ftco-animate">
        <div className="align-self-stretch box text-center p-4">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className={values.icon}></span>
          </div>
          <div>
            <h3 className="mb-4 ">{values.title}</h3>
            <p>{isAppointment}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBox;
