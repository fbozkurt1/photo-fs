import React, { Component } from "react";

class InputText extends Component {
  state = {
    id: "",
    type: "",
    placeholder: "",
    name: ""
  };

  render() {
    const values = this.props;

    return (
      <div class="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label">
            <div className="input-group mb-2">
              <label>{values.placeholder} </label>
            </div>
          </div>
          <div className="col-sm-3">
            <input
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

export default InputText;
