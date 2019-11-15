import React, { Component } from "react";
import ContactBox from "./sectionComponents/ContactBox";
import ContactForm from "../../contact/ContactForm";
import GoogleMap from "./sectionComponents/GoogleMap";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="ftco-section contact-section" id="contact">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-4 heading-section text-center ftco-animate">
              <h2 className="mb-4">Contact Us</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <ContactBox
              icon="fas fa-map-marker-alt"
              title="Adres"
              value="198 West 21th Street, Suite 721 New York NY 10016"
            />
            <ContactBox
              icon="fas fa-phone"
              title="İletişim Telefonu"
              value="+90 534 404 7939"
            />
            <ContactBox
              icon="far fa-envelope"
              title="E-posta"
              value="fuatbozkurt1@gmail.com"
            />
            <ContactBox
              icon="far fa-calendar-check"
              title="Randevu"
              value="randevu"
              href="/appointments"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <ContactForm />
            </div>
            <div className="col-md-6">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
