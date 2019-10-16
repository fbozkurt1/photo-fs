import React, { Component } from "react";

// components
import InputText from "./formComponents/InputText";
import DropdownSelect from "./formComponents/DropdownSelect";
import SaveButton from "./formComponents/SaveButton";
import InputTextArea from "./formComponents/InputTextArea";
import Dates from "./formComponents/Dates";
import RadioButton from "./formComponents/RadioButton";

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
