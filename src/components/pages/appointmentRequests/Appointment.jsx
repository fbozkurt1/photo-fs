import React, { Component } from "react";

// components
import InputText from "../../forms/InputTextInputText";
import DropdownSelect from "../../forms/DropdownSelectownSelect";
import SaveButton from "../../formComponents/formComponents/SaveButton";
import InputTextArea from "../../formComponents/formComponents/InputTextArea
import Dates from "../../formComponents/formComponents/Dates
import Home from "../sections/Home";
import Footer from "../sections/Footer";
import $ from "jquery";

class Appointments extends Component {
  state = {};

  componentDidMount() {
    var target = $($("#appointment").attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top
      },
      600
    );
  }

  render() {
    return (
      <div>
        <Home href="/appointments" />

        <h2 id="appointment" href="#appointment" className="text-center mt-5">
          Randevu Oluştur
        </h2>

        <div className="container mt-5">
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
          <DropdownSelect
            id={["outSide", "born", "event"]}
            typeOfPhoto={["Dış Çekim", "Doğum", "Etkinlik"]}
          />
          <InputTextArea
            id="message"
            name="message"
            type="text"
            placeholder="Özel Mesajınız."
          />
          <Dates />

          <div className="mb-3">
            <strong>
              <i>
                Talep ettiğiniz randevu tarafımızca onaylandıktan sonra mail
                veya telefon ile bilgilendirileceksiniz.
              </i>
            </strong>
          </div>

          <SaveButton text="Randevu Al" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Appointments;
