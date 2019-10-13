import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import InputText from "../FormComponents/inputText.js";
import InputTextArea from "../FormComponents/inputTextArea.js";

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
