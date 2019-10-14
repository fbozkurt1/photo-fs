import React, { Component } from "react";

class RadioButton extends Component {
  state = {};
  render() {
    return (
      <div class="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label">
            <div className="input-group mb-2">
              <label>Ücret Durumu</label>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                class="custom-control-input"
                id="paid"
                name="paid"
              />
              <label class="custom-control-label" for="paid">
                Ödendi
              </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                class="custom-control-input"
                id="unpaid"
                name="unpaid"
              />
              <label class="custom-control-label" for="unpaid">
                Ödenmedi
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioButton;
