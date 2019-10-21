import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css"; //Eklemezsen icon gözükmüyor
import "../../../assets/css/card.css"; //card-body-icon size ayarlıyor

const Card = props => {
  const { type, text, cardF, iconT } = props;

  return (
    <div className={type}>
      <div className="card-body">
        <div className="card-body-icon">
          <i className={iconT}></i>
        </div>
        <div className="float-left">26 {text}</div>
      </div>
      <a className={cardF} href="#">
        <span className="float-left">Detayları göster!</span>

        <span className="float-right">
          <i className="fas fa-angle-right"></i>
        </span>
      </a>
    </div>
  );
};
export default Card;
