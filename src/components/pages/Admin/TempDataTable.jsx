import "datatables.net-dt/css/jquery.dataTables.min.css";

import React, { Component } from "react";
const $ = require("jquery");
$.DataTable = require("datatables.net-dt/js/dataTables.dataTables.min.js");

class Table extends Component {
  state = {};
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
                <tr>
                  <th>İsim</th>
                  <th>Teslim Durumu</th>
                  <th>Çekim Tipi</th>
                  <th>İşlem Yapan</th>
                  <th>Çekim Tarihi</th>
                  <th>Fiyat</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>İsim</th>
                  <th>Teslim Durumu</th>
                  <th>Çekim Tipi</th>
                  <th>İşlem Yapan</th>
                  <th>Çekim Tarihi</th>
                  <th>Fiyat</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
