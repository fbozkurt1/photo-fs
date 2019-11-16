import React, { Component } from "react";
import DataTable from "../../common/TempDataTable";
import Sidebar from "../../common/Sidebar";
import Breadcrumb from "../../common/Breadcrumb";
class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    // get employees from API and set state
    let dummyData = [
      {
        Adı: "fuat",
        Telefon: "0555555555555",
        Çekim: "Düğün",
        Durum: "Hazırlanıyor",
        Tarih: "11.11.2019",
        Ücret: "Ödendi-Peşin",
        "": (
          <div>
            <button type="button" className="btn btn-primary">
              <span className="fa fa-edit mr-2" aria-hidden="true"></span>
              Düzenle
            </button>
            <button type="button" className="btn btn-primary">
              <span className="fa fa-trash-alt mr-2" aria-hidden="true"></span>
              Sil
            </button>
          </div>
        )
      }
    ];
    this.setState({
      data: dummyData,
      isLoaded: true
    });
  }

  render() {
    const { data, isLoaded } = this.state;

    const isDataExist = isLoaded ? (
      <DataTable
        data={data}
        title="Müşteri Listesi"
        textButtonAdd="Müşteri Ekle"
      />
    ) : (
      <h1>data yok daha</h1>
    );
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 mt-3">
          <div className="row mt-5 ml-5">
            <div className="col-md-5 ml-4">
              <Breadcrumb
                paths={[
                  { to: "/admin", label: "Yönetim Paneli" },
                  { to: "/customer", label: "Müşteri İşlemleri" }
                ]}
              />
            </div>
          </div>
          <div className="container">{isDataExist}</div>
        </div>
      </div>
    );
  }
}

export default Customer;
