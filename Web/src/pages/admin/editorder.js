import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
// import ImageUploader from 'react-images-upload';
// import datatables from "react-jquery-datatables";
// import 'react-table/react-table.css';
import { SideNav, Chevron, Icon } from "react-side-nav";
import "../../../node_modules/react-side-nav/dist/themes.css";
import Swal from "sweetalert2";
import LOGO from "../../assets/images/tashmalogo.jpg";

import moment from "moment";
import {
  CommonGet,
  CommonPost,
  CommonDeleteById,
  CommonGetById,
  CommonUpdateById,
} from "../../config";
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

class editorder extends Component {
  state = {
    order: [],
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let orderId = sessionStorage.getItem("order");
    CommonGetById("orders", orderId)
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          order: json,
          orderId: orderId,
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  isPaid = (e) => {
    Swal.fire({
      title: "",
      text: "Are you sure you want to make this change?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        let orders = this.state.order;
        this.setState((prevState) => ({
          order: {
            // object that we want to update
            ...prevState.order, // keep all other key-value pairs
            isPaid: !prevState.order.isPaid, // update the value of specific key
          },
        }));
      }
    });
  };

  rendarModal(ordewr) {
    let order = this.state.order;
    let contetnts = order.Items;
    let contetntsShip = this.state.shippingAddress;

    let orderContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            return (
              <tr key={item.Id}>
                <td>{item.ProductName}</td>
                <td>{item.Qty}</td>
                <td>{item.Price}</td>
                <td className="text-right">{item.Discount}</td>
                <td className="text-right">{(item.Price * item.Qty)-item.Discount}</td>
                <td className="text-right">{item.WorkDoneBy}</td>
              </tr>
            );
          });

    return (
      <div>
        {/* <div className="popup">
          <div className="popup_inner"> */}
        <label>
          <strong>ORDER DETAILS</strong>
        </label>

        {/* <div class="table-responsive" style={{ overflow: "hidden"},{paddingLeft : "20%"}}> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>{order.OrderId}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer Name</td>
              <td>{order.CustomerName}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{order.PhoneNumber}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{moment(order.CreatedDate).format("DD-MM-YYYY")}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <th>Product</th>
                <th>Quantity</th>
                <th>Net Price</th>
                <th>Discount</th>
                <th>Total Price</th>
                <th>Work Done By</th>
                {orderContent}
              </td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>{order.OrderTotal}</td>
            </tr>
            <tr>
              <td>Advance</td>
              <td>{order.AdvancePayment}</td>
            </tr>
            <tr>
              <td>Due Payment</td>
              <td>{order.AmountDue}</td>
            </tr>
            <tr>
              <td>Order Created By</td>
              <td>{order.CreatedBy}</td>
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>{order.paymentMethod}</td>
            </tr>
            <tr>
              <td>Payment</td>
              <td hidden={order.isPaid}>
                <p>
                  Mark as Paid
                  <input
                    type="checkbox"
                    id="ispaid"
                    onChange={(e) => this.isPaid(e)}
                    value={order.isPaid}
                    checked={order.isPaid}
                  />
                </p>
              </td>
              <td hidden={!order.isPaid}>
                <p>Paid</p>
              </td>
            </tr>
            {/* {tableContent} */}
          </tbody>
        </Table>
      </div>
    );
  }

  //UPDATE THE PRODUCT

  editProduct = () => {
    let id = this.state.orderId;
    let order = this.state.order;
    let formdata = {
      payerID: order.user,
      orderID: order._id,
      paymentID: this.state.paymentId,
    };
    console.log(formdata);

    CommonUpdateById("orders", `${id}/pay`, formdata)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        Swal.fire("", `${json.message}`, "success");
      });
  };

  /******************************************************MAIN RENDER**********************************88 */
  render() {
    let imageURL = this.state.base64string;
    let contetntsDisplay = this.rendarModal(this.state.order);

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
                        <strong>EDIT ORDER</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div>
                  </div>
                </div>
                <div>{contetntsDisplay}</div>

                <div className="row">
                  <div className="col-md-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.editProduct}
                    >
                      SUBMIT
                    </button>
                  </div>
                  {/* <div className="col-md-3" >
                      <button
                        type="button"
                        className="btn btn-primary"
                        //onClick={this.resetHandler}
                      >
                        EDIT ORDER
                      </button> 
                  </div>*/}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default editorder;
