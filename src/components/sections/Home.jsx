import React from "react";

const Home = props => (
  <div>
    <section
      id="home"
      className="hero-wrap js-fullheight bg-photo"
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="row float-right slider-text text mr-3">
        <p className="mt-4">
          <a href={props.hrefLogin} className="btn-custom">
            Giriş Yap
            <i className="ml-2 fas fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-lg-7 ftco-animate d-flex align-items-center">
            <div className="text text-center">
              <h1 className="logo">
                <a href="index.html">
                  <span className="fas fa-camera-retro"></span> Sinem Kobaner
                  <small>Fotoğrafçı / Adana</small>
                </a>
              </h1>
              <h1 className="mb-4">
                Anılarınızı <br /> Ölümsüzleştiriyoruz
              </h1>
              <p className="mb-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts.
              </p>
              <p className="mt-5">
                <a href={props.hrefAppoint} className="btn-custom">
                  Randevu
                  <i className="ml-2 fas fa-arrow-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
