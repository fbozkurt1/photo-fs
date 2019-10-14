import React, { Component } from "react";

class SaveButton extends Component {
  state = {};
  render() {
    return (
      <div class="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label"></div>
          <div className="col-sm-5">
            <button class="btn btn-primary" type="submit">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveButton;
