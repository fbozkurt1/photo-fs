import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputText from "../components/FormComponents/inputText.js";
import InputTextArea from "../components/FormComponents/inputTextArea.js";
import SaveButton from "../components/FormComponents/saveButton.js";

class ContactForm extends Component {
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
          isLabeled={0}
          placeholder="Adınız ve Soyadınız"
          type="text"
          name="firstName"
          id="firstName"
        />
        <InputText
          isLabeled={0}
          placeholder="Telefon Numaranız"
          type="text"
          name="phoneNum"
          id="phoneNum"
        />
        <InputText
          isLabeled={0}
          placeholder="email@gmail.com"
          type="text"
          name="email"
          id="email"
        />
        <InputTextArea
          isLabeled={0}
          placeholder="Mesajınız"
          type="textarea"
          name="message"
          id="textarea"
        />
        <SaveButton text="Gönder" />
      </div>
    );
  }
}

export default ContactForm;
