import React from "react";
import {
  fetchEmployeesError,
  fetchEmployeesPending,
  fetchEmployeesSuccess
} from "../actions/actionsEmployee";

const employees = {
  Adı: "fuat",
  Telefon: "0555555555555",
  Email: "Bangalore",
  "": (
    <div>
      <button
        // onClick={this.toggleModal}
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
};

function fetchEmployees() {
  return dispatch => {
    dispatch(fetchEmployeesPending());
   
    if (employees) {
      dispatch(fetchEmployeesSuccess(employees));
      return employees;
    } else {
      dispatch(fetchEmployeesError("some error"));
    }
  };
}

export default fetchEmployees;
