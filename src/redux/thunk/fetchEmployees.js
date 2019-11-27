import React from "react";
import {
  fetchEmployeesError,
  fetchEmployeesPending,
  fetchEmployeesSuccess
} from "../actions/employeeActions";

const employees = [
  {
    id: 1,
    name: "fuat",
    phone: "0555555555555",
    email: "Bangalore",
    createdAt: "27/11/2019",
    isActive: "1"
  },
  {
    id: 2,
    name: "fuat",
    phone: "02323235555555",
    email: "Bangalore2323",
    createdAt: "27/11/2019",
    isActive: "2"
  }
];

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(fetchEmployeesPending());

    // if (employees) {
    dispatch(fetchEmployeesSuccess(employees));

    // } else {
    //   dispatch(fetchEmployeesError("some error"));
    // }
  };
};
