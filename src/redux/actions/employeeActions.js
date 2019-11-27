export const FETCH_EMPLOYEES_PENDING = "FETCH_EMPLOYEES_PENDING";
export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const FETCH_EMPLOYEES_ERROR = "FETCH_EMPLOYEES_ERROR";

export const FETCH_EMPLOYEE_BY_ID_PENDING = "FETCH_EMPLOYEE_BY_ID_PENDING";
export const FETCH_EMPLOYEE_BY_ID_SUCCESS = "FETCH_EMPLOYEE_BY_ID_SUCCESS";
export const FETCH_EMPLOYEE_BY_ID_ERROR = "FETCH_EMPLOYEE_BY_ID_ERROR";

/** ALL EMPLOYEES */
export const fetchEmployeesPending = () => {
  return {
    type: FETCH_EMPLOYEES_PENDING
  };
}

export const fetchEmployeesSuccess = (employees) => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    employees: employees
  };
}

export const fetchEmployeesError = (error) => {
  return {
    type: FETCH_EMPLOYEES_ERROR,
    error: error
  };
}
/** END ALL EMPLOYEES */

/** EMPLOYEE BY ID */
export const fetchEmployeeByIdPending = () => {
  return {
    type: FETCH_EMPLOYEE_BY_ID_PENDING
  };
}

export const fetchEmployeeByIdSuccess = (employee) => {
  return {
    type: FETCH_EMPLOYEE_BY_ID_SUCCESS,
    employee: employee
  };
}

export const fetchEmployeeByIdError = (error) => {
  return {
    type: FETCH_EMPLOYEE_BY_ID_ERROR,
    error: error
  };
}

/** END EMPLOYEE BY ID */
