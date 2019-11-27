import {
  FETCH_EMPLOYEES_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_PENDING,
  FETCH_EMPLOYEE_BY_ID_ERROR,
  FETCH_EMPLOYEE_BY_ID_PENDING,
  FETCH_EMPLOYEE_BY_ID_SUCCESS
} from "../actions/employeeActions";

const initialState = {
  employees: [],
  pending: true,
  error: null
}

const employeesReducer = (state = initialState, action) => {
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

    /** EMPLOYEE BY ID */
    case FETCH_EMPLOYEE_BY_ID_PENDING:
      return {
        pending: true,
        error: false
      };
    case FETCH_EMPLOYEE_BY_ID_SUCCESS:
      return {
        pending: false,
        employee: action.employee,
        error: false
      };
    case FETCH_EMPLOYEE_BY_ID_ERROR:
      return {
        pending: false,
        error: action.error
      };
    /** END EMPLOYEE BY ID */

    default:
      return state;
  }
}

export default employeesReducer;

