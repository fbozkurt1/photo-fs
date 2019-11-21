import {
  FETCH_EMPLOYEES_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_PENDING
} from "../actions/actionsEmployee";


const employeesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.employees
      };
    case FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default employeesReducer;

// export const getEmployees = state => state.employees;
// export const getEmployeesPending = state => state.pending;
// export const getEmployeesError = state => state.error;
