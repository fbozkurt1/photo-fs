import React, { Component } from "react";
import AboutImage from "../assets/images/about.jpg";
import Image from "./Image";

class Gallery extends Component {
  state = {};

  render() {
    return (
      <section id="work" className="ftco-section">
        <div className="container-fluid">
          <div className="row no-gutters">
            <Image imageUrl={AboutImage} />
            <Image imageUrl={AboutImage} />
            <Image imageUrl={AboutImage} />
            <Image imageUrl={AboutImage} />
            <Image imageUrl={AboutImage} />
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
