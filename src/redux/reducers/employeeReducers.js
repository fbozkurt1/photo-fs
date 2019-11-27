import {
  FETCH_EMPLOYEES_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_PENDING
} from "../actions/employeeActions";

const initialStateEmployees = {
  employees: [],
  pending: true,
  error: null
};

const initialStateEmployeeById = {
  employee: {},
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

    default:
      return state;
  }
};
