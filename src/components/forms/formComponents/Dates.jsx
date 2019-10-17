import React, { Component } from "react";

class Dates extends Component {
  state = {};
  render() {
    return (
      <div className="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label">
            <div className="input-group mb-2">
              <label>Çekim Tarihi</label>
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
