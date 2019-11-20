import React from "react";
import {
  fetchEmployeesError,
  fetchEmployeesPending,
  fetchEmployeesSuccess
} from "../actions/actionsEmployee";

const employees = [
  {
    id: 1,
    Adı: "fuat",
    Telefon: "0555555555555",
    Email: "Bangalore"
  }
];

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
