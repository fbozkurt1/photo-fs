import React, { Component } from "react";
import ReactStoreIndicator from "react-score-indicator";

// components
import InputText from "../../forms/InputTextInputText";
import SaveButton from "../../formComponents/formComponents/SaveButton";
import InputTextArea from "../../formComponents/formComponents/InputTextArea";

class Feedback extends Component {
  state = { point: 0 };

  handleChange = e => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value) && e.target.value <= 100) {
      this.setState({ point: e.target.value });
    }
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
          placeholder="email@gmail.com"
          type="text"
          name="email"
          id="email"
        />
        <InputTextArea
          placeholder="Düşünceleriniz"
          type="text"
          name="feedbackMessage"
          id="feedbackMessage"
        />
        <InputText
          placeholder="Değerlendirme Puanı 100 üzerinden"
          type="text"
          name="userPoint"
          id="userPoint"
          pattern="[0-9]*"
          onChange={this.handleChange}
          onKeyPressed={this.keyPress}
        />

        <div className="row">
          <div className="col-sm-7">
            <ReactStoreIndicator
              width={100}
              value={this.state.point}
              maxValue={100}
            />
          </div>
        </div>
        <SaveButton text="Gönder" />
      </div>
    );
  }
}

export default Feedback;
