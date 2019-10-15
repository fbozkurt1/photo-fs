import React, { Component } from "react";
import InputText from "../FormComponents/inputText";
import DropdownSelect from "../../../React/forms-app/src/FormComponents/dropdownSelect";
import SaveButton from "../../../React/forms-app/src/FormComponents/saveButton";
import LabelFor from "../../../React/forms-app/src/FormComponents/labelFor";
import InputTextArea from "../../../React/forms-app/src/FormComponents/inputTextArea";
import Dates from "../../../React/forms-app/src/FormComponents/Dates";
class Appoitments extends Component {
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

export default Appoitments;
