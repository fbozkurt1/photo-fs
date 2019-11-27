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
  },{
    id: 2,
    Adı: "fuat22",
    Telefon: "052255555555555",
    Email: "Bangal222ore"
  }
];


export const fetchEmployees = () => {
  return dispatch => {
    dispatch(fetchEmployeesPending());

    // if (employees) {
      dispatch(fetchEmployeesSuccess(employees));
      return employees;
    // } else {
    //   dispatch(fetchEmployeesError("some error"));
    // }
  };
}
