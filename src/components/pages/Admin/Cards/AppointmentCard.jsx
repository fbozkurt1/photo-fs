import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class MsgCard extends Component {
  render() {
    const datas = this.props;
    return (
      <div className="card rounded-5">
        <div className="card-header font-weight-bold bg-primary text-md-center">
          RANDEVU İSTEĞİ
        </div>
        <div className="card-body bg-light">
          <h6 className="card-subtitle mb-1 font-weight-bold">{datas.name}</h6>
          <p className="card-text">{datas.description}</p>
        </div>
        <ul className="list-group list-group-horizontal inline-block">
          <li className="list-group-item py-1  list-group-item-warning text-md-center">
            <small className="lead">Telefon</small> {datas.phone}
          </li>
          <li className="list-group-item py-1  list-group-item-success text-md-center">
            <small className="lead">Randevu Tarihi</small> {datas.appoDate}
          </li>
          <li className="list-group-item py-1  list-group-item-info text-md-center">
            <small className="lead">Email </small>
            {datas.email}
          </li>
        </ul>
        <div className="card-footer">
          <div className="row">
            <div className="col-md-6 ">
              <button className="btn btn-outline-success" type="button">
                Onayla
              </button>
            </div>
            <div className="col-md-6 text-right">
              <button className="btn btn-outline-danger" type="button">
                Reddet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MsgCard;
