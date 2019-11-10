import "datatables.net-dt/css/jquery.dataTables.min.css";

import React, { Component } from "react";
const $ = require("jquery");
$.DataTable = require("datatables.net-dt/js/dataTables.dataTables.min.js");

class Table extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.getDataHeaders = this.getDataHeaders.bind(this);
    this.getDataRows = this.getDataRows.bind(this);
    this.getDataKeys = this.getDataKeys.bind(this);
    console.log(props);
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
    $(document).ready(function() {
      $("#dataTable").DataTable({
        paginate: true,
        language: {
          url: "//cdn.datatables.net/plug-ins/1.10.20/i18n/Turkish.json"
        }
      });
    });
  }

  render() {
    return (
      <div className="card ml-3 w-100">
        <div className="card-header">
          <i className="fas fa-table"></i>
          <span className="ml-3">Kullanıcı Listesi</span>
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
