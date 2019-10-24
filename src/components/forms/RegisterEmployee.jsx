import React, { Component } from "react";
import InputText from "../forms/formComponents/InputText";
import SaveButton from "../forms/formComponents/SaveButton";
import Dates from "../forms/formComponents/Dates";
import Table from "../pages/Admin/TempDataTable";
class EmployeeReg extends Component {
  state = {};
  render() {
    return (
      <div className="container w-75">
        <div className="row">
          <div className="col">
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
            <Dates text="Kayıt Tarihi" />
            <SaveButton text="Kaydet" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeReg;
