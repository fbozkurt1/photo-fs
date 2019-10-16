import React from "react";

//images
import AboutImage2 from "../../assets/images/about-2.jpg";
import AboutImage from "../../assets/images/about.jpg";
import AboutImage3 from "../../assets/images/about-3.jpg";

const About = () => (
  <section className="ftco-about img ftco-section" id="about">
    <div className="container">
      <div className="row d-flex no-gutters">
        <div className="col-md-6 col-lg-6 d-flex">
          <div className="img-about img d-flex align-items-stsretch">
            <div className="overlay"></div>
            <div
              className="img img-video d-flex align-self-stretch align-items-center"
              style={{ backgroundImage: `url(${AboutImage2})` }}
            ></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 pl-md-5">
          <div className="heading-section ftco-animate">
            <h2 className="mb-4">
              Snapshot is A Creative Direction, <br />
              Photography Agency
            </h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.Far far away,
              behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>

            <div className="counter-wrap ftco-animate d-flex my-md-4">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="120">
                    0
                  </span>
                  <span>Project complete</span>
                </p>
              </div>
            </div>
            <div className="d-flex w-100">
              <div
                className="img img-about-2 mr-2"
                style={{ backgroundImage: `url(${AboutImage})` }}
              ></div>
              <div
                className="img img-about-2 ml-2"
                style={{ backgroundImage: `url(${AboutImage3})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
