import React, { Component } from "react";

//components
import DataTable from "../../common/TempDataTable";
import Sidebar from "../../common/Sidebar";
import Modal from "../../common/Modal/Modal";
import InputText from "../../formComponents/InputText";
import Breadcrumb from "../../common/Breadcrumb";
import EmployeeModal from "../../common/Modal/EmployeeModal";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      isModalOpen: false,
      date: new Date()
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  onSave(name) {
    console.log(name);
  }

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

    const isEmployeesExist = isLoaded ? (
      <DataTable
        data={data}
        title="Personel Listesi"
        textButtonAdd="Personel Ekle"
      />
    ) : (
      <h1>data yok daha</h1>
    );

    const employee = {
      name: "fuat",
      email: "fuatbozkurt",
      phone: "05344047939",
      isActive: 1
    };
    const texts = {
      title: "Personel Düzenle",
      buttonText: "Kaydet"
    };

    return (
      <div>
        <Modal show={this.state.isModalOpen}>
          <EmployeeModal
            onClose={this.toggleModal}
            onSave={this.onSave}
            texts={texts}
            employee={employee}
          />
        </Modal>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10 mt-3">
            <div className="row ml-5">
              <div className="col-md-5 ml-4">
                <Breadcrumb
                  paths={[
                    {
                      to: "/admin",
                      label: "Yönetim Paneli"
                    },
                    { to: "/employee", label: "Personel İşlemleri" }
                  ]}
                />
              </div>
            </div>

            <div className="container">{isEmployeesExist}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
