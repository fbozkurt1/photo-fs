import React from "react";
import Footer from "./footer";
import AddTodo from "../../containers/redux/AddTodo";
import VisibleTodoList from "../../containers/redux/VisibleTodoList";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
