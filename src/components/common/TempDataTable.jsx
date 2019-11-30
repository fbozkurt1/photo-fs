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

  componentDidUpdate(prevProps, prevStates) {
    console.log("updated");
    if (prevProps.data.length != this.props.data.length) {
      console.log("changed");
      this.setState({
        data: this.props.data
      });
    }
  }

  getDataKeys = () => Object.keys(this.props.data[0]);

  getDataHeaders = () => {
    return (
      <tr>
        <th>id</th>
        <th>Ad-Soyad</th>
        <th>Telefon</th>
        <th>Email</th>
        <th>Eklenme Tarihi</th>
        <th>Aktif mi?</th>
        <th>işlem</th>
      </tr>
    );
  };

  getDataRows = () => {
    let items = this.props.data;
    let keys = this.getDataKeys();
    return items.map((row, index) => {
      return (
        <tr key={`${row.name}${index}`}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };
  initDatatable = () => {
    let dTable = $("#dataTable").DataTable({
      paginate: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.20/i18n/Turkish.json"
      },
      columnDefs: [
        { width: "20%", targets: -1, searchable: false, orderable: false }, // set column width to last column
        { visible: false, targets: 0, searchable: false, orderable: false }, // set invisible to first column (id column)
        { visible: false, targets: -2, searchable: false, orderable: false }
      ]
    });

    $("#dataTable tbody").on("click", "button", function() {
      let data = dTable.row($(this).parents("tr")).data();
      // alert(data[0] + "'s salary is: " + data[2]);
    });
  };
  componentDidMount() {
    this.initDatatable();
  }

  render() {
    console.log("render", this.state);
    const { onClickAddButton, textButtonAdd, title } = this.props;
    return (
      <div className="card ml-3 w-100">
        <div className="card-header">
          <i className="fas fa-table"></i>
          <span className="ml-3">{title}</span>
          <button
            type="button"
            onClick={onClickAddButton}
            className="btn btn-primary float-right"
          >
            <span className="fa fa-plus mr-2" aria-hidden="true"></span>
            {textButtonAdd}
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
              <thead>{this.getDataHeaders()}</thead>
              <tfoot>{this.getDataHeaders()}</tfoot>
              <tbody>{this.getDataRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const RenderRow = props => {
  //`${index}${props.data[key]}`
  return props.keys.map((key, index) => {
    return <td key={`${index}${props.data[key]}`}>{props.data[key]}</td>;
  });
};

export default Table;
