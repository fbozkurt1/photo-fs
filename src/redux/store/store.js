// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";

// import employeeReducer from "../reducers/reducersEmployee";

// const middlewares = [thunk];
// const initialState = {
//   pending: true,
//   employees: [],
//   error: ""
// };
// export default createStore(
//   employeeReducer,
//   initialState,
//   applyMiddleware(...middlewares)
// );

import thunk from 'redux-thunk';
import employeeReducer from '../reducers/reducersEmployee';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(employeeReducer,applyMiddleware(thunk));

export default store;

