import React, { Component } from "react";

class MsgCard extends Component {
  render() {
    const datas = this.props;

    const isButton =
      datas.isAppointmentCard === "1" ? (
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
      ) : null;

    const isFeedback = datas.feedbackPoint ? (
      <div className="col-md-3">
        <small className="lead">Değerlendirme</small> {datas.feedbackPoint}
      </div>
    ) : null;

    const col = datas.feedbackPoint ? "col-md-3" : "col-md-4";

    return (
      <div className="card rounded-5">
        <div className="card-header font-weight-bold bg-secondary text-md-center">
          <h5 className="text-white">{datas.title}</h5>
        </div>
        <div className="card-body bg-light">
          <h6 className="card-subtitle mb-1 font-weight-bold">{datas.name}</h6>
          <p className="card-text">{datas.description}</p>
          <hr />
          <div className="row mt-3">
            <div className={col}>
              <small className="lead">Email</small> {datas.email}
            </div>
            <div className={col}>
              <small className="lead">Telefon</small> {datas.phone}
            </div>
            <div className={col}>
              <small className="lead">Tarih</small> {datas.date}
            </div>
            {isFeedback}
          </div>
        </div>
        {isButton}
      </div>
    );
  }
}

export default MsgCard;
