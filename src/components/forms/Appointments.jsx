import React, { Component } from "react";

// components
import InputText from "./formComponents/InputText";
import DropdownSelect from "./formComponents/DropdownSelect";
import SaveButton from "./formComponents/SaveButton";
import InputTextArea from "./formComponents/InputTextArea";
import Dates from "./formComponents/Dates";
import Home from "../sections/Home";
import Footer from "../sections/Footer";

class Appointments extends Component {
  state = {};
  render() {
    return (
      <div>
        <Home />
        <div className="container-fluid mt-5">
          <InputText
            placeholder="İsim, Soyisim"
            type="text"
            name="firstName"
            id="firstName"
          />
          <InputText
            placeholder="Telefon Numarası"
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
          <DropdownSelect typeOfPhoto={["Dış Çekim", "Doğum", "Etkinlik"]} />
          <InputTextArea
            id="message"
            name="message"
            type="text"
            placeholder="Özel Mesajınız."
          />
          <Dates />
          <SaveButton text="Randevu Al" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Appointments;
