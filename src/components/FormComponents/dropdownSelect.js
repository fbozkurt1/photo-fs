import React, { Component } from "react";

class DropdownSelect extends Component {
  state = { id: "", name: "", typeOfPhoto: "" };
  render() {
    const values = this.props;
    return (
      <div class="form-group required">
        <div className="row">
          <div className="col-sm-2 control-label">
            <div className="input-group mb-2">
              <label>Çekim Tipi</label>
            </div>
          </div>
          <div className="col-sm-3">
            <select class="browser-default custom-select">
              <option selected>Çekim Tipi</option>
              {values.typeOfPhoto.map(type => {
                return (
                  <option id={values.id} name={values.name}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownSelect;
