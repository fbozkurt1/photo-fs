import React, { Component } from "react";

//components
import DataTable from "../../common/TempDataTable";
import Sidebar from "../../common/Sidebar";
import Modal from "../../common/Modal/Modal";
import Breadcrumb from "../../common/Breadcrumb";
import EmployeeModal from "../../common/Modal/EmployeeModal";

//Redux
import { connect } from "react-redux";
import { fetchEmployees } from "../../../redux/thunk/fetchEmployees";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      employee: {}
    };
  }

  toggleModal = elem => {
    // get button id -- yani personel ID
    const employeeId = elem.target.getAttribute("data-id");
    console.log(
      "employees2",
      this.props.employees.find(x => x.id == employeeId)
    );
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      employee: this.props.employees.find(x => x.id == employeeId)
    });
  };

  onSave(data) {
    console.log("data", data);
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees, error, pending } = this.props;

    if (pending) {
      return <h1>data yükleniyor</h1>;
    }

    /** Düzenle ve Sil butonları */
    employees.map(elem => {
      elem.action = (
        <div>
          <button
            value={elem.id}
            data-id={elem.id}
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
      );
      return elem;
    });
    /** End Düzenle ve Sil butonları */

    // const employee = {
    //   name: "fuat",
    //   email: "fuatbozkurt",
    //   phone: "05344047939",
    //   isActive: 1
    // };
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
            employee={this.state.employee}
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

            <div className="container">
              <DataTable
                data={employees}
                title="Personel Listesi"
                textButtonAdd="Personel Ekle"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employeeReducers.employees,
  pending: state.employeeReducers.pending
});

const mapDispatchToProps = {
  fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
