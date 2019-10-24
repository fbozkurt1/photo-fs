import React, { Component } from "react";
import { DatePicker } from "rsuite";
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
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                locale={{
                  sunday: "Paz",
                  monday: "Pzt",
                  tuesday: "Sal",
                  wednesday: "Çar",
                  thursday: "Per",
                  friday: "Cum",
                  saturday: "Cmt",
                  ok: "Tamam",
                  today: "Bugün",
                  yesterday: "Dün",
                  hours: "Saat",
                  minutes: "Dakika",
                  seconds: "Saniye"
                }}
                placeholder="Tarih Seçin"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dates;
