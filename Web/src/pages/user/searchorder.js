import React, { Component } from "react";
import "./../../../node_modules/font-awesome/css/font-awesome.min.css";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  CommonGet,
  CommonPost,
  CommonDeleteById,
  CommonUpdateById,
  CommonGetById,
} from "../../config";
import { SideNav, Chevron, Icon } from "react-side-nav";
import "../../../node_modules/react-side-nav/dist/themes.css";
import $ from "jquery";
import DataTable from "datatables";
import Swal from "sweetalert2";
import LOGO from "../../assets/images/tashmalogo.jpg";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

class SearchOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCategory: "",
      orderNumber: "",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  componentWillMount() {}

  componentDidMount() {
    // this.jqueryScripts();
  }

  componentDidUpdate() {}

  editProduct = () => {};

  addProduct = () => {};

  commissionTypeChange = (e) => {};

  selectHandler = () => {};

  //delete a product
  formItemDeleteHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        CommonDeleteById("products", id)
          .then((res) => res.json())
          .then((json) => {
            window.location.reload();
            console.log("Deleted" + json);
          })
          .then(() => {
            Swal.fire("Deleted!", "", "success");
          });
      }
    });
  }

  renderPrintValues = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            return (
              <tr>
                <td>{item.itemcategory}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.discount}</td>
              </tr>
            );
          });
    return (
      // <Table striped bordered hover id="example">
      <div class="table-responsive">
        {/* <table id="example" class="display dataTable no-footer" cellspacing="0" width="100%"> */}
        <Table striped bordered hover id="example">
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
          <tfoot>
            <tr>
              <td>Total Price : {this.state.totalPrice}</td>
              <td>Advance : {this.state.advance}</td>
              <td>Amount Due : {this.state.totalAmoutDue}</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  };

  //display values to table

  renderDisplayTable = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{moment(item.createdAt).format("DD-MM-YYYY")}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.modalOpen(item._id)}
                  >
                    View
                  </button>
                </td>
                <td>{payStatus}</td>
                <td>{shippingStatus}</td>
              </tr>
            );
          });
    return (
      // <Table striped bordered hover id="example">
      <div class="table-responsive">
        {/* <table id="example" class="display dataTable no-footer" cellspacing="0" width="100%"> */}
        <Table striped bordered hover id="example">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone Num</th>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Order Details</th>
              <th>Completed</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>{/* {tableContent} */}</tbody>
        </Table>
      </div>
    );
  };

  //reset form

  resetHandler = () => {
    this.setState({
      commissionType: "",
      commission: 0,
      qty: 0,
      description: "",
      itemcategory: "",
      itemName: "",
      price: 0,
      workDoneBy: "",
      discount: 0,
    });
  };

  advanceChange = (e) => {
    var totalAmoutDue = this.state.totalPrice - e.target.value;
    totalAmoutDue = this.setState({
      advance: e.target.value,
      totalAmoutDue: totalAmoutDue,
    });
  };

  //printhandler******************************************************
  printHandler = (event) => {
    var mywindow = window.open("", "PRINT", "height=600,width=1000");
    mywindow.document.write("<html> <body>");
    // mywindow.document.write(
    //   '<link rel="stylesheet" href="../../assets/css/bootstrap.min.css" type="text/css" />'
    //   );
    // mywindow.document.write(
    // '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />'   );
    mywindow.document.write(
      " <center> <h3><strong>TASHMA PHOTO STUDIO & DIGITAL LAB<hr/></strong></h3>  </center>"
    );
    // mywindow.document.write('<div class-"container" id="width">');

    // mywindow.document.write('<div class-"row">');
    // mywindow.document.write('<div class-"col-4">');
    mywindow.document.write(
      "Date: <strong>" +
        moment(this.state.toDate).format("YYYY-MM-DD") +
        "</strong><br/>"
    );
    mywindow.document.write("OrderNo:423422 <br/>");
    mywindow.document.write("Issued By:Ranil");
    mywindow.document.write("<br/><br/><br/><div>");
    mywindow.document.write('<div style="margin-left:90mm;margin-top:-6mm;">');
    mywindow.document.write(document.getElementById("printContent").innerHTML);
    mywindow.document.write("<br/><br/></div>");

    // mywindow.document.write("</div>");
    // mywindow.document.write('<div class="clearfix"></div>');
    // mywindow.document.write('<div class-"col-4">');
    // mywindow.document.write("<br/><br/></div>");
    // mywindow.document.write("</div>");
    // mywindow.document.write("</div>");
    // mywindow.document.write(document.getElementById("printContent").innerHTML);
    // mywindow.document.write("<br/><br/></div>");
    // mywindow.document.write(document.getElementById("printContentsTotalValues").innerHTML);
    mywindow.document.write("</body ></html>");
    setTimeout(function () {
      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      //mywindow.close();
    }, 3000);
  };

  render() {
    let imageURL = this.state.base64string;
    let table = this.renderDisplayTable(this.state.itemList);
    let printContent = this.renderPrintValues(this.state.itemList);

    // categoryDropDown = this.categoryDropDownList()
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
                        <strong>SEARCH ORDER</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <label>From Date</label>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={(date) => this.setState({ startDate: date })}
                      />
                    </div>
                    <br />
                    <div className="col-md-3">
                      <label>To Date</label>
                      <DatePicker
                        selected={this.state.endDate}
                        onChange={(date) => this.setState({ endDate: date })}
                      />
                    </div>
                    <br />
                    <br />
                    <div className="col-md-3">
                      <button
                        type="button"
                        className="btn btn-primary"
                        hidden={this.state.isDisable}
                        onClick={this.addProduct}
                      >
                        SEARCH ITEM
                      </button>
                    </div>

                    <hr />
                    {/* TABLE GRID STARTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    <div>{table}</div>
                    <div id="printContent" hidden>
                      {printContent}
                    </div>
                    {/* TABLE GRID ENDS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    <hr />
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

export default SearchOrder;
