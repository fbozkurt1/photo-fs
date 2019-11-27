import React, { Component } from "react";

import "../../assets/css/stepsProgressbar.css";
class Progress extends Component {
  state = {
    progressbar: [
      { step: 0, isCompleted: true },
      { step: 1, isCompleted: false },
      { step: 2, isCompleted: false }
    ]
  };
  render() {
    return (
      <div className="container mt-5">
        <ul className="progressbar">
          <li
            className={`${
              this.state.progressbar[0].isCompleted ? "active" : null
            }`}
          >
            Çekim Yapıldı
          </li>
          <li
            className={`${
              this.state.progressbar[1].isCompleted ? "active" : null
            }`}
          >
            {this.state.progressbar[1].isCompleted
              ? "Baskısı Yapıldı"
              : "Baskıya Hazırlanıyor"}
          </li>
          <li
            className={`${
              this.state.progressbar[2].isCompleted ? "active" : null
            }`}
          >
            {this.state.progressbar[2].isCompleted
              ? "Kontroller Yapıldı"
              : "Kontroller Yapılıyor"}
          </li>
        </ul>
      </div>
    );
  }
}

export default Progress;
