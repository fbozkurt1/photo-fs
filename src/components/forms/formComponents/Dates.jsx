import React, { Component } from "react";

class Dates extends Component {
  state = {};
  render() {
    const values = this.props;
    return (
      <div className="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label">
            <div className="input-group mt-2">
              <label>{values.text}</label>
            </div>
          </div>
          <div className="col-sm-3">
            <div>
              <input className="form-control" type="date"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dates;
