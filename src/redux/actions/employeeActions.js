export const FETCH_EMPLOYEES_PENDING = "FETCH_EMPLOYEES_PENDING";
export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const FETCH_EMPLOYEES_ERROR = "FETCH_EMPLOYEES_ERROR";

export const ADD_EMPLOYEE_PENDING = "ADD_EMPLOYEE_PENDING";
export const ADD_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
export const ADD_EMPLOYEE_ERROR = "ADD_EMPLOYEE_ERROR";

/** ALL EMPLOYEES */
export const fetchEmployeesPending = () => {
  return {
    type: FETCH_EMPLOYEES_PENDING
  };
};

export const fetchEmployeesSuccess = employees => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    employees: employees
  };
};

export const fetchEmployeesError = error => {
  return {
    type: FETCH_EMPLOYEES_ERROR,
    error: error
  };
};

export const addEmployeePending = () => {
  return {
    type: ADD_EMPLOYEE_PENDING
  };
};

export const addEmployeeSuccess = employees => {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    employees: employees
  };
};

export const addEmployeeError = error => {
  return {
    type: ADD_EMPLOYEE_ERROR,
    error: error
  };
};
/** END ALL EMPLOYEES */
