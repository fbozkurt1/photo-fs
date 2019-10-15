import React, { Component } from "react";

class InputTextArea extends Component {
  state = {};

  render() {
    const values = this.props;
    return (
      <div className="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label">
            <div className="input-group mb-2">
              <label>{values.placeholder} </label>
            </div>
          </div>
          <div className="col-sm-3">
            <textarea
              rows="5"
              cols="55"
              className="form-control"
              type={values.type}
              name={values.name}
              id={values.id}
              placeholder={values.placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InputTextArea;
