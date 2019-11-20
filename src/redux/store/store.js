import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import employeeReducer from "../reducers/reducersEmployee";

const middlewares = [thunk];
const initialState = {
  pending: true,
  employees: [],
  error: ""
};
export default createStore(
  employeeReducer,
  initialState,
  applyMiddleware(...middlewares)
);
