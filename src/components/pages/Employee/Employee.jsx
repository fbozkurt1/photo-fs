import React, { Component } from "react";

//components
import DataTable from "../../common/TempDataTable";
import Sidebar from "../../common/Sidebar";
import Modal from "../../common/Modal/Modal";
import InputText from "../../formComponents/InputText";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  componentDidMount() {
    // get employees from API and set state
    let dummyData = [
      {
        Adı: "fuat",
        Telefon: "0555555555555",
        Email: "Bangalore",
        deneme: "fuat2",
        "": (
          <div>
            <button
              onClick={this.toggleModal}
              type="button"
              className="btn btn-primary"
            >
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
        title="Personel Listesi"
        textButtonAdd="Personel Ekle"
      />
    ) : (
      <h1>data yok daha</h1>
    );
    return (
      <div>
        <Modal show={this.state.isModalOpen} onClose={this.toggleModal}>
          <InputText
            placeholder="Telefon Numarası"
            type="text"
            name="phoneNum"
            id="phoneNum"
          />
          <input type="text" />
        </Modal>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10 mt-3">
            <div className="container">{isDataExist}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
