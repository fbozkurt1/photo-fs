import React, { Component } from "react";

class DropdownSelect extends Component {
  state = { id: "", name: "", typeOfPhoto: "" };
  render() {
    const values = this.props;
    return (
      <div className="form-group required">
        <div className="row">
          {/* <div className="col-sm-2 control-label">
            <div className="input-group mb-2">
              <label>Çekim Tipi</label>
            </div>
          </div> */}
          <div className="col-sm-3">
            <select className="browser-default custom-select">
              <option key="-1" id="-1" defaultValue>
                Çekim Tipi
              </option>
              {values.typeOfPhoto.map(type => {
                return (
                  <option key={type} id={type} name={type}>
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
