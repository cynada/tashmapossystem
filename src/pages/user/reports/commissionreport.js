import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "../../../node_modules/react-side-nav/dist/themes.css";
import LOGO from "../../assets/images/tashmalogo.jpg";

import moment from "moment";
import {
  CommonGet,
  CommonPost,
  CommonDeleteById,
  CommonGetById,
} from "../../config";
import $ from "jquery";
import DataTable from "datatables";

const menuItems = [
  {
    id: 1,
    label: "New Order",
    icon: "fas fa-battery-half",
    link: "/user-addorder",
    items: [
      { id: 11, label: "Item 1.1", icon: "fas fa-car", link: "/item11" },
      { id: 12, label: "Item 1.2", icon: "fas fa-bullhorn", link: "/item12" },
    ],
  },
  {
    id: 2,
    label: "Search Orders",
    icon: "fas fa-battery-half",
    link: "/user-vieworders",
  },
  {
    id: 3,
    label: "View Sales",
    icon: "fas fa-battery-half",
    link: "/admin-viewsales",
  },
  {
    id: 4,
    label: "Log Out",
    icon: "fas fa-battery-half",
    link: "/admin-login",
  },
];
const NavLink = (props) => (
  <a href={props.to} {...props}>
    <i className={`fa ${props.icon}`} />
    {props.label}
  </a>
);

class commissionreport extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };
  renderDisplayTable = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            return (
              <tr key={item.id}>
                <td>Username</td>
                <td>Username</td>
                <td>Username</td>
                <td>Username</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => this.selectHandler(item.id)}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            );
          });
    return (
      // <Table striped bordered hover id="example">
      <div class="table-responsive">
        {/* <table id="example" class="display dataTable no-footer" cellspacing="0" width="100%"> */}
        <Table className="table-striped table-bordered hover" id="example">
          <thead>
            <tr>
              <th>User Name</th>
              <th>EPF Number</th>
              <th>Order Id</th>
              <th>Commission</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
  
          </tbody>
        </Table>
      </div>
    );
  };

  render() {}
}
export default commissionreport;
