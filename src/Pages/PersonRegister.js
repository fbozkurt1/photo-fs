import React, { Component } from "react";
import InputText from "../FormComponents/inputText";
import DropdownSelect from "../FormComponents/dropdownSelect";
import InputTextArea from "../FormComponents/inputTextArea";
import RadioButton from "../FormComponents/radioButton";
import SaveButton from "../FormComponents/saveButton";
import Dates from "../FormComponents/Dates";

class PersonRegister extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    phoneNumTwo: "",
    typeOfPhoto: [],
    price: "",
    password: "",
    address: ""
  };
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
        <InputText
          placeholder="Parola"
          type="text"
          name="password"
          id="password"
        />

        <DropdownSelect typeOfPhoto={["Dış Çekim", "Doğum", "Etkinlik"]} />
        <RadioButton />
        <InputTextArea
          placeholder="Adres Bilgileri"
          type="text"
          name="address"
          id="address"
        />
        <Dates />
        <SaveButton id="save" name="save" />
      </div>
    );
  }
}

export default PersonRegister;
