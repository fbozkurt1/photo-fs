import React, { Component } from "react";
import DatePicker from "react-date-picker";

class EmployeeModal extends Component {
  state = { date: new Date() };

  onSave = () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const createdAt = this.state.date;
    const isActive = document.getElementById("isActive").value;
    if (name && phone && email && createdAt && isActive) {
      return this.props.onSave({ name, phone, email, createdAt, isActive });
    } else {
      alert("lütfen boş alan bırakmayın");
    }
  };

  onDateChange = date => this.setState({ date });

  componentDidMount() {}

  render() {
    const { texts, employee } = this.props;
    if (employee) {
      return (
        <div>
          <div className="row">
            <div className="col-md-10 text-left">
              <h2>{texts.title}</h2>
            </div>
            <div className="col-md-2 text-right">
              <button
                id="closeButton"
                type="button"
                className="close"
                aria-label="Close"
                onClick={this.props.onClose}
              >
                <h2 aria-hidden="true">&times;</h2>
              </button>
            </div>
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="name">Ad ve Soyad</label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              placeholder="Ad ve Soyad giriniz"
              defaultValue={employee.name ? employee.name : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Telefon Numarası</label>
            <input
              required
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Telefon numarasını giriniz"
              defaultValue={employee.phone ? employee.phone : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeEmail">Email</label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              placeholder="Email adresini giriniz"
              defaultValue={employee.email ? employee.email : ""}
            />
          </div>
          <div className="form-group">
            <DatePicker
              id="createdAt"
              onChange={this.onDateChange}
              value={this.state.date}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isActive"
              defaultChecked={employee.isActive}
            />
            <label className="form-check-label" htmlFor="isActive">
              Aktif
            </label>
            <small id="isActiveHelp" className="form-text text-muted">
              Personelin çalışma durumu
            </small>
          </div>
          <button
            id="saveButton"
            type="button"
            onClick={this.onSave}
            className="btn btn-primary"
          >
            {texts.buttonText}
          </button>
        </div>
      );
    } else {
      return <h2>Data Yok</h2>;
    }
  }
}

export default EmployeeModal;
