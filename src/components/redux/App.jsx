import React from "react";
import Footer from "./footer";
import AddTodo from "../../containers/redux/AddTodo";
import VisibleTodoList from "../../containers/redux/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
