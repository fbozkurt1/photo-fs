import React, { Component } from "react";

//components
import DataTable from "../../common/TempDataTable";
import Sidebar from "../../common/Sidebar";
import Modal from "../../common/Modal/Modal";
import Breadcrumb from "../../common/Breadcrumb";
import EmployeeModal from "../../common/Modal/EmployeeModal";

//Redux
import { connect } from "react-redux";
import {
  fetchEmployees,
  addEmployee
} from "../../../redux/thunk/employeeThunk";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      employee: {},
      action: null
    };
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  editEmployee = elem => {
    // get button id -- yani personel ID
    const employeeId = elem.target.getAttribute("data-id");
    this.setState({
      employee: this.props.employees.find(x => x.id == employeeId),
      action: "edit"
    });
    this.toggleModal();
  };

  addEmployee = () => {
    this.setState({
      employee: {},
      action: "add"
    });
    this.toggleModal();
  };

  handleEditEmployee(data) {
    // todo --> update employee process
    console.log("data ", data);
  }

  handleAddEmployee(data) {
    // todo --> update employee process
    this.toggleModal();
    this.props.addEmployee(data);
    // console.log("data ", data);
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees, error, pending } = this.props;
    console.log(employees);
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
            onClick={this.editEmployee}
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

    const texts = {
      title: "Personel Düzenle",
      buttonText: "Kaydet"
    };

    return (
      <div>
        <Modal show={this.state.isModalOpen}>
          <EmployeeModal
            onClose={this.toggleModal}
            onEdit={this.handleEditEmployee}
            onAdd={this.handleAddEmployee}
            texts={texts}
            employee={this.state.employee}
            action={this.state.action}
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
                onClickAddButton={this.addEmployee}
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
  fetchEmployees,
  addEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
