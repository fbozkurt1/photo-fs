import React, { Component } from "react";

//components
import DataTable from "../Admin/TempDataTable";
import Sidebar from "../Admin/Sidebar";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    // get employees from API and set state
    let dummyData = [
      { Adı: "fuat", Telefon: "0555555555555", Email: "Bangalore" },
      { Adı: "sefa", Telefon: "0555555555555", Email: "Mumbai" },
      { Adı: "çiğdem", Telefon: "0555555555555", Email: "Chennai" },
      { Adı: "furkan bozkurt", Telefon: "0555555555555", Email: "Delhi" },
      {
        Adı: "orospu cocugu ahmet",
        Telefon: "0555555555555",
        Email: "Hyderabad"
      }
    ];
    this.setState({
      data: dummyData,
      isLoaded: true
    });
  }

  render() {
    const { data, isLoaded } = this.state;

    const isDataExist = isLoaded ? (
      <DataTable data={data} />
    ) : (
      <h1>asdsadsadad</h1>
    );
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 mt-3">
          <div className="container">{isDataExist}</div>
        </div>
      </div>
    );
  }
}

export default Employee;
