import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class MessageCard extends Component {
  render() {
    const datas = this.props;
    return (
      <div className="card rounded-5">
        <div className="card-header font-weight-bold bg-primary text-md-center">
          {datas.msgType == "0" ? "İletişim Mesajı " : "Değerlendirme Mesajı"}
          <button className="btn-success float-right">Görüldü</button>
        </div>
        <div className="card-body bg-light">
          <h6 className="card-subtitle mb-1 font-weight-bold">{datas.name}</h6>
          <p className="card-text">{datas.message}</p>
        </div>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item py-1  list-group-item-warning text-md-center">
            <small className="lead">Telefon</small> {datas.phone}
          </li>
          <li className="list-group-item py-1  list-group-item-info text-md-center">
            <small className="lead">Email </small>
            {datas.email}
          </li>
          {datas.msgType == "1" ? (
            <li className="list-group-item py-1  list-group-item-danger text-md-center">
              <small className="lead">Değerlendirme </small>
              {datas.point}
            </li>
          ) : (
            <li></li>
          )}
        </ul>
        <div className="card-footer"></div>
      </div>
    );
  }
}

export default MessageCard;
