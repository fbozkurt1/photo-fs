import React from "react";
import {
  fetchEmployeesError,
  fetchEmployeesPending,
  fetchEmployeesSuccess,
  fetchEmployeeByIdPending,
  fetchEmployeeByIdError,
  fetchEmployeeByIdSuccess
} from "../actions/employeeActions";

const employees = [
  {
    id: 1,
    Adı: "fuat",
    Telefon: "0555555555555",
    Email: "Bangalore"
  }, {
    id: 2,
    Adı: "fuat22",
    Telefon: "052255555555555",
    Email: "Bangal222ore"
  }
];

const employee =
{
  id: 1,
  Adı: "fuat",
  Telefon: "0555555555555",
  Email: "Bangalore"
};


export const fetchEmployees = () => {
  return dispatch => {
    dispatch(fetchEmployeesPending());

    // if (employees) {
    dispatch(fetchEmployeesSuccess(employees));

    // } else {
    //   dispatch(fetchEmployeesError("some error"));
    // }
  };
}

export const fetchEmployeeById = (employeeId) => {
  return dispatch => {
    dispatch(fetchEmployeeByIdPending());

    // send employeeId to api and get employee by id
    dispatch(fetchEmployeeByIdSuccess(employee));
  }
}
