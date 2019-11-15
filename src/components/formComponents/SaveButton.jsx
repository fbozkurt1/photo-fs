import React, { Component } from "react";

class SaveButton extends Component {
  state = {};
  render() {
    const values = this.props;
    return (
      <div className="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label"></div>
          <div className="col-sm-7">
            <button className="btn btn-primary float-sm-right" type="submit">
              {values.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveButton;
