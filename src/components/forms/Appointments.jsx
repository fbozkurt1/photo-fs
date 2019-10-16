import React, { Component } from "react";

// components
import InputText from "./formComponents/InputText";
import DropdownSelect from "./formComponents/DropdownSelect";
import SaveButton from "./formComponents/SaveButton";
import InputTextArea from "./formComponents/InputTextArea";
import Dates from "./formComponents/Dates";

class Appointments extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
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
        <InputTextArea placeholder="Özel Mesajınız." />
        <Dates />
        <SaveButton text="Randevu Al" />
      </div>
    );
  }
}

export default Appointments;
