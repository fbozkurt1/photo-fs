import "datatables.net-dt/css/jquery.dataTables.min.css";

import React, { Component } from "react";
const $ = require("jquery");
$.DataTable = require("datatables.net-dt/js/dataTables.dataTables.min.js");

class Table extends Component {
  state = {
    data: [],
    title: "",
    textButtonAdd: ""
  };

  constructor(props) {
    super(props);
    this.getDataHeaders = this.getDataHeaders.bind(this);
    this.getDataRows = this.getDataRows.bind(this);
    this.getDataKeys = this.getDataKeys.bind(this);
    this.state = {
      data: props.data,
      title: props.title,
      textButtonAdd: props.textButtonAdd
    };
  }

  getDataKeys = () => Object.keys(this.props.data[0]);

  getDataHeaders = () => {
    let keys = this.getDataKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key}</th>;
    });
  };

  getDataRows = () => {
    let items = this.props.data;
    let keys = this.getDataKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  componentDidMount() {
    $("#dataTable").DataTable({
      paginate: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.20/i18n/Turkish.json"
      },
      columnDefs: [
        { width: "20%", targets: -1, searchable: false, orderable: false }
      ] // set column width to last column
    });
  }

  render() {
    return (
      <div className="card ml-3 w-100">
        <div className="card-header">
          <i className="fas fa-table"></i>
          <span className="ml-3">{this.state.title}</span>
          <button type="button" className="btn btn-primary float-right">
            <span className="fa fa-plus mr-2" aria-hidden="true"></span>
            {this.state.textButtonAdd}
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>{this.getDataHeaders()}</tr>
              </thead>
              <tfoot>
                <tr>{this.getDataHeaders()}</tr>
              </tfoot>
              <tbody>{this.getDataRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const RenderRow = props => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};

export default Table;
