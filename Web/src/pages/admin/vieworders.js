import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Navbar, NavDropdown, Nav, FormControl } from "react-bootstrap";
// import ImageUploader from 'react-images-upload';
// import datatables from "react-jquery-datatables";
// import 'react-table/react-table.css';
import { SideNav, Chevron, Icon } from "react-side-nav";
import "../../../node_modules/react-side-nav/dist/themes.css";
import LOGO from "../../assets/images/tashmalogo.jpg";

import moment from "moment";
import {
  CommonGet,
  CommonPost,
  CommonDeleteById,
  CommonGetById,
  CommonGetByParams,
} from "../../config";
import $ from "jquery";
import DataTable from "datatables";
import { menuItems } from "../menuItems";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NavLink = (props) => (
  <a href={props.to} {...props}>
    <i className={`fa ${props.icon}`} />
    {props.label}
  </a>
);

class vieworders extends Component {
  state = {
    pictures: [],
    price: "",
    productName: "",
    categoryId: -1,
    inStock: true,
    isModalOpen: false,
    isSelectAll: false,
    orderList: [],
    order: [],
    startDate: new Date(),
    endDate: new Date(),
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  searchItem = () => {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let formData = {
      startDate: `${startDate.getFullYear()}/${
        startDate.getMonth() + 1
      }/${startDate.getDate()}`,
      endDate: `${endDate.getFullYear()}/${
        endDate.getMonth() + 1
      }/${endDate.getDate()}`,
    };
    CommonPost("orders/get-order-by-daterange", formData)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          orderList: json,
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  };

  modalOpen = (id) => {
    sessionStorage.setItem("order", id);
    this.props.history.push("./admin-editorder");
  };
  renderDisplay = (contetnts) => {
    let tableContent =
      contetnts === undefined || contetnts === null
        ? null
        : contetnts.map((item) => {
            //Progress
            let IsCompleted = item.IsCompleted == 1 ? "Yes" : "No";
            let IsDone = item.IsDone == 1 ? "Yes" : "No";
            return (
              <tr key={item.OrderId}>
                <td>{item.OrderId}</td>
                <td>{item.CustomerName}</td>
                <td>{item.PhoneNumber}</td>
                <td>{moment(item.CreatedDate).format("DD-MM-YYYY")}</td>
                <td>{item.OrderTotal}</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.modalOpen(item.OrderId)}
                  >
                    View
                  </button>
                </td>
                <td>{IsDone}</td>
                <td>{IsCompleted}</td>
                {/* <td>{item.isPaid}</td>
              <td>{item.isPaid}</td> */}
                {/* <td><a title="Edit " onClick={(event) => this.formItemEditHandler(item._id)} ><i className="i class="i class="fa fa-list-alt fa-2x fore-color-cyan icon-blue"></i> </a></td>
                   <td><a title="Delete " onClick={(event) => this.formItemDeleteHandler(item._id)} ><i className="fa fa-trash fa-2x fore-color-cyan icon-blue"></i> </a></td> */}
              </tr>
            );
          });

    return (
      //   <div class="table-responsive" style={{ overflow: "hidden"},{paddingLeft : "20%"}}>
      <div>
        <Table striped bordered hover id="example">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Order Details</th>
              <th>Work Done</th>
              <th>Completed</th>
              {/* <th>Completed</th>
              <th>
                Select All{" "}
                <input
                  id="selectallid"
                  type="checkbox"
                  checked={this.state.isSelectAll}
                  onChange={(e) => this.selectAllReconciliationHandler()}
                />
              </th> */}
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </Table>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  };

  render() {
    let contetntsDisplay = this.renderDisplay(this.state.orderList);

    const myStyle = {
      width: "400px",
    };
    return (
      <div className="page-content">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <center>
                <img src={LOGO} style={{ width: "250px" }} />{" "}
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
                        <strong>MANAGE ORDERS</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="col-md-3">
                          <label>From Date</label>
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={(date) =>
                              this.setState({ startDate: date })
                            }
                          />
                        </div>
                        <br />
                        <div className="col-md-3">
                          <label>To Date</label>
                          <DatePicker
                            selected={this.state.endDate}
                            onChange={(date) =>
                              this.setState({ endDate: date })
                            }
                          />
                        </div>
                        <br />
                        <br />
                        <div className="col-md-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            hidden={this.state.isDisable}
                            onClick={this.searchItem}
                          >
                            SEARCH ITEM
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>{contetntsDisplay}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default vieworders;
