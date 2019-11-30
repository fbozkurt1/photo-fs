import {
  FETCH_EMPLOYEES_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_PENDING,
  ADD_EMPLOYEE_ERROR,
  ADD_EMPLOYEE_PENDING,
  ADD_EMPLOYEE_SUCCESS
} from "../actions/employeeActions";

const initialStateEmployees = {
  employees: [],
  pending: true,
  error: null
};

export const employeeReducers = (state = initialStateEmployees, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_PENDING:
      return {
        ...state,
        pending: true,
        error: null
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.employees,
        error: null
      };
    case FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        pending: false,
        employees: [],
        error: action.error
      };
    case ADD_EMPLOYEE_PENDING:
      return {
        ...state,
        pending: true,
        error: null
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.employees,
        error: null
      };
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        pending: false,
        employees: [],
        error: action.error
      };
    default:
      return state;
  }
};
