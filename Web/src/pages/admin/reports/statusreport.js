import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "../../../../node_modules/react-side-nav/dist/themes.css";
import LOGO from "../../../assets/images/tashmalogo.jpg";
import { SideNav, Chevron, Icon } from "react-side-nav";

import moment from "moment";
import {
  CommonGet,
  CommonPost,
  CommonDeleteById,
  CommonGetById,
} from "../../../config";
import $ from "jquery";
import DataTable from "datatables";

const menuItems = [
  {
    id: 1,
    label: "Manage Products",
    icon: "fas fa-battery-half",
    link: "/admin-addproducts",
  },
  {
    id: 2,
    label: "Manage Users",
    icon: "fas fa-battery-half",
    link: "/admin-adduser",
  },
  {
    id: 3,
    label: "View Orders",
    icon: "fas fa-battery-half",
    link: "/admin-vieworders",
  },
  {
    id: 4,
    label: "View Sales",
    icon: "fas fa-battery-half",
    link: "/admin-viewsales",
  },
  {
    id: 5,
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

class statusreport extends Component {
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
            </tr>
          </thead>
          <tbody>
            {tableContent}
          </tbody>
        </Table>
      </div>
    );
  };

   render() {
    // let imageURL = this.state.base64string;
    let table = this.renderDisplayTable();
    return (
      <div className="page-content">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <center>
                <img src={LOGO} style={{ width: "250px" }} />
              </center>

              {/* <img src={'./src/assets/images/premiumlogo.jpg'}/> */}
              {/* <div>
                      <img src={LOGO} style={{width:"auto"},{height:"50vh"}}/>
                      </div> */}
              <SideNav
                items={menuItems}
                linkComponent={NavLink}
                chevronComponent={Chevron}
                iconComponent={Icon}
              />
            </div>
          </div>
          <div className="col-md-9">
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                    <div className="mb-8">
                      {" "}
                      {/* <span className="badge badge-primary p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span> */}
                      <h2 className="mt-4">
                        <strong>USER COMMISSION REPORT</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                      <div>{table}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default statusreport;
