import React, { Component } from "react";

//components
import DataTable from "../../common/TempDataTable";
import Sidebar from "../../common/Sidebar";
import Modal from "../../common/Modal/Modal";
import Breadcrumb from "../../common/Breadcrumb";
import EmployeeModal from "../../common/Modal/EmployeeModal";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchEmployeesAction from "../../../redux/thunk/fetchEmployees";
import {
  getEmployees,
  getEmployeesError,
  getEmployeesPending
} from "../../../redux/reducers/reducersEmployee";
import { array } from "prop-types";

class Employee extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   employees: [],
    //   isLoaded: false,
    //   pending: true
    //   isModalOpen: false,
    //   date: new Date()
    // };
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    
    return pending;

    // if (pending === false) {
    //   return false;
    // }
    // // more tests
    // return true;
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
    // let dummyData = [
    //   {
    //     Adı: "fuat",
    //     Telefon: "0555555555555",
    //     Email: "Bangalore",
    //     "": (
    //       <div>
    //         <button
    //           onClick={this.toggleModal}
    //           type="button"
    //           className="btn btn-primary"
    //         >
    //           <span className="fa fa-edit mr-2" aria-hidden="true"></span>
    //           Düzenle
    //         </button>
    //         <button type="button" className="btn btn-primary">
    //           <span className="fa fa-trash-alt mr-2" aria-hidden="true"></span>
    //           Sil
    //         </button>
    //       </div>
    //     )
    //   }
    // ];
    // this.setState({
    //   employees: dummyData,
    //   isLoaded: true
    // });
  }

  render() {
    // const { employees, isLoaded } = this.state;
    const { employees, error, pending } = this.props;
    console.log(employees);
    console.log('component',this.shouldComponentRender());

    if (this.shouldComponentRender()) {
      return <h1>data yok dah222222</h1>;
    }else{
      let s = [employees];
      console.log(employees);
      return  (<DataTable
      data={s}
      title="Personel Listesi"
      textButtonAdd="Personel Ekle"
      />);
    }
    
   

    // const isEmployeesExist = isLoaded ? (
    //   <DataTable
    //     data={employees}
    //     title="Personel Listesi"
    //     textButtonAdd="Personel Ekle"
    //   />
    // ) : (
    //   <h1>data yok daha</h1>
    // );

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
        {/* <Modal show={this.state.isModalOpen}>
          <EmployeeModal
            onClose={this.toggleModal}
            onSave={this.onSave}
            texts={texts}
            employee={employee}
          />
        </Modal> */}
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
  error: getEmployeesError(state),
  employees: getEmployees(state),
  pending: getEmployeesPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEmployees: fetchEmployeesAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
