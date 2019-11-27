import {
  FETCH_EMPLOYEES_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_PENDING
} from "../actions/actionsEmployee";

const initialState = {
  employees: [],
  pending:true,
  error: null
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_PENDING:
      return {
        ...state,
        pending: true,
        error:null
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.employees,
        error:null
      };
    case FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        pending: false,
        employees:[],
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
