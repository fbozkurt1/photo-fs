import React from "react";

//images
import AboutImage from "../../../../assets/images/about.jpg";

const Services = () => (
  <section id="services" className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-5 heading-sfection ftco-animate pb-5">
              <h2 className="mb-4">Hizmetlerimiz</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="media block-6 services d-block ftco-animate">
                <div className="icon">
                  <span className="fas fa-video"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">
                    Movies &amp; Advertising Videos
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="media block-6 services d-block ftco-animate">
                <div className="icon">
                  <span className="fas fa-photo-video"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Clip &amp; Music Videos</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="media block-6 services d-block ftco-animate">
                <div className="icon">
                  <span className="fas fa-camera-retro"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Short Film Productions</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex align-items-stretch">
          <div
            className="img w-100"
            style={{ backgroundImage: `url(${AboutImage})` }}
          ></div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
