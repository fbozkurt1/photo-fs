import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import InputText from "./formComponents/InputText";
import InputTextArea from "./formComponents/InputTextArea";

class PersonInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    message: ""
  };
  render() {
    return (
      <div className="container">
        <InputText
          placeholder="Adınız ve Soyadınız"
          type="text"
          name="firstName"
          id="firstName"
        />
        <InputText
          placeholder="Telefon Numaranız"
          type="text"
          name="phoneNum"
          id="phoneNum"
        />
        <InputText
          placeholder="email@gmail.com"
          type="text"
          name="email"
          id="email"
        />
        <InputTextArea
          placeholder="Mesajınız"
          type="textarea"
          name="message"
          id="textarea"
        />
      </div>
    );
  }
}

export default PersonInfo;
