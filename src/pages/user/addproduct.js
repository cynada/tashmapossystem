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

// import "../../assets/css/bootstrap.min.css"


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
    link: "/user-searchorder",
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

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commissionType: "",
      commission: 0,
      itemList: [],
      qty: 0,
      description: "",
      itemcategory: "",
      itemName: "",
      price: 0,
      workDoneBy: "",
      discount: 0,
      advance: 0,
      totalPrice: 0,
      totalAmoutDue: 0,
      customerName:"",
      phoneNumber:""
    };
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  componentWillMount() {
    CommonGet("products", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          productList: json,
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  }

  componentDidMount() {
    // this.jqueryScripts();

    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    CommonGet("products", "")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          productList: json,
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  }

  editProduct = () => {
    let id = this.state.editProductId;
    let formdata = {
      name: this.state.productName,
      description: this.state.description,
      price: this.state.price,
      image: this.state.base64string,
      brand: this.state.brand,
      countInStock: this.state.instock,
      category: this.state.category,
    };

    CommonUpdateById("products", id, formdata)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        Swal.fire({
          position: "bottom",
          //icon: 'success',
          title: `${json.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then(() => {
        CommonGet("products", "")
          .then((res) => res.json())
          .then((json) => {
            console.log("GG" + json);
            this.setState({
              productList: json,
            });
          });
      });
  };

  addProduct = () => {
    var totalPriceAddition =
      this.state.totalPrice +
      this.state.price * this.state.qty -
      this.state.discount;

    let formdata = {
      itemName: this.state.itemName,
      description: this.state.description,
      price: this.state.price,
      qty: this.state.qty,
      discount: this.state.discount,
      itemcategory: this.state.itemcategory,
      workDoneBy: this.state.workDoneBy,
      commission: this.state.commission,
    };

    var arrayList = this.state.itemList;
    arrayList.push(formdata);
    this.setState({
      itemList: arrayList,
      totalPrice: totalPriceAddition,
      totalAmoutDue: totalPriceAddition,
    });

    this.resetHandler();
  };

  commissionTypeChange = (e) => {
    this.setState({
      commissionType: e.target.value,
    });

  };

  selectHandler = (id) => {
    this.setState({
      commissionType: "",
      commission: 0,
      itemList: [],
      qty: 0,
      description: "",
      itemcategory: "",
      itemName: "",
      price: 0,
      workDoneBy: "",
      discount: 0,
      advance: 0,
      totalPrice: 0,
      totalAmoutDue: 0,
    })
   
  };


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
              <tr>
                <td>{item.itemcategory}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.discount}</td>
                <td>{item.workDoneBy}</td>
                <td>{item.commission}</td>

                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => this.selectHandler(item._id)}
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <a
                    title="Delete "
                    onClick={() => this.formItemDeleteHandler(item._id)}
                  >
                    <i className="fa fa-trash fa-2x fore-color-cyan icon-blue"></i>{" "}
                  </a>
                </td>
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
              <th>WDB</th>
              <th>Commission</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
  
          </tbody>
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

  searchAndPrint = () => {

    let formdata = {
      customerName:this.state.customerName,
      phoneNumber:this.state.phoneNumber,
      orders:this.state.itemList,
      advance:this.state.advance,
      amountDue:this.state.totalAmoutDue,
      totalAmount:this.state.totalPrice
    }

    console.log(formdata)

  }

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
      ' <center> <h3><strong>TASHMA PHOTO STUDIO & DIGITAL LAB<hr/></strong></h3>  </center>'
    );
    // mywindow.document.write('<div class-"container" id="width">');

    // mywindow.document.write('<div class-"row">');
    // mywindow.document.write('<div class-"col-4">');
    mywindow.document.write(
      "Date: <strong>" +
        moment(this.state.toDate).format("YYYY-MM-DD") +
        "</strong><br/>"
    );
    mywindow.document.write(
      "OrderNo:423422 <br/>"
    );
    mywindow.document.write(
     "Issued By:Ranil"
    );
    mywindow.document.write("<br/><br/><br/><div>");
    mywindow.document.write(
      '<div style="margin-left:90mm;margin-top:-6mm;">'
    
    );
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
    },3000);
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
              <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Customer Name</strong>
                            </label>

                            <input
                              id="form_email"
                              type="text"
                              name="email"
                              className="form-control"
                              required="required"
                              value={this.state.customerName}
                              onChange={(e) =>
                                this.setState({ customerName: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Phone Number</strong>
                            </label>

                            <input
                              id="form_email"
                              type="text"
                              name="email"
                              className="form-control"
                              required="required"
                              value={this.state.phoneNumber}
                              onChange={(e) =>
                                this.setState({ phoneNumber: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        </div>
                <div className="row justify-content-center text-center">
                  <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                    <div className="mb-8">
                      {" "}
                      {/* <span className="badge badge-primary p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span> */}
                      <h2 className="mt-4">
                        <strong>ORDER</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <form id="contact-form">
                      <div className="messages" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Category</strong>
                            </label>
                            <select
                              className="form-control"
                              value={this.state.itemcategory}
                              onChange={(e) =>
                                this.setState({ itemcategory: e.target.value })
                              }
                            >
                              <option value="-1">-Category-</option>{" "}
                              <option value="Albums">Albums</option>
                              <option value="DesignPhoto">DesignPhoto</option>
                              <option value="Photo">Photo</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Name</strong>
                            </label>

                            <select
                              className="form-control"
                              value={this.state.itemName}
                              onChange={(e) =>
                                this.setState({ itemName: e.target.value })
                              }
                            >
                              <option value="-1">-Name-</option>
                              <option value="Passport">Passport</option>
                              <option value="NIC">NIC</option>
                              <option value="12*16">12*16</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Description</strong>
                            </label>

                            <textarea
                              id="form_experience"
                              name="Experience If any"
                              className="form-control"
                              value={this.state.description}
                              onChange={(e) =>
                                this.setState({ description: e.target.value })
                              }
                              placeholder="Description"
                              rows={4}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Qty</strong>
                            </label>

                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Qty"
                              required="required"
                              value={this.state.qty}
                              onChange={(e) =>
                                this.setState({ qty: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Price</strong>
                            </label>

                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Price"
                              required="required"
                              value={this.state.price}
                              onChange={(e) =>
                                this.setState({ price: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Discount</strong>
                            </label>

                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Discount"
                              required="required"
                              value={this.state.discount}
                              onChange={(e) =>
                                this.setState({ discount: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Work Done By</strong>
                            </label>

                            <select
                              className="form-control"
                              value={this.state.workDoneBy}
                              onChange={(e) =>
                                this.setState({ workDoneBy: e.target.value })
                              }
                            >
                              <option value="-1">Work Done By</option>{" "}
                              <option value="Ford">Ranil : EPF100</option>
                              <option value="Volvo">Manori : EPF101</option>
                              <option value="Fiat">Devja : EPF102</option>
                              <option value="Fiat">Kenuja : EPF103</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Commission</strong>
                            </label>

                            <select
                              className="form-control"
                              value={this.state.commissionType}
                              id="commissionType"
                              onChange={(e) => this.commissionTypeChange(e)}
                            >
                              <option value="-1">Commission %</option>{" "}
                              <option value="1">5%</option>
                              <option value="2">15%</option>
                              <option value="3">Other</option>
                            </select>
                          </div>
                        </div>
                        {/* HIDE THIS ACCORDING TO COMMISSION TYPE */}
                        <div
                          className="col-md-3"
                          hidden={!(this.state.commissionType == "3")}
                        >
                          <div className="form-group">
                            <label>
                              <strong>Commission Amount</strong>
                            </label>

                            <input
                              id="Commission"
                              type="number"
                              className="form-control"
                              value={this.state.commission}
                              onChange={(e) =>
                                this.setState({ commission: e.target.value })
                              }
                              placeholder="Commission"
                            />
                          </div>
                        </div>
                      </div>
                      <br /> <br />
                      <div className="row">
                        <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.editProduct}
                          >
                            UPDATE ITEM
                          </button>
                        </div>
                        <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.resetHandler}
                          >
                            RESET
                          </button>
                        </div>
                        <div
                          className="col-md-3
                        "
                        >
                          <button
                            type="button"
                            className="btn btn-primary"
                            hidden={this.state.isDisable}
                            onClick={this.addProduct}
                          >
                            ADD ITEM
                          </button>
                        </div>
                      </div>
                      <br />
                      <br />
                      <hr />
                      {/* TABLE GRID STARTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                      <div>{table}</div>
                      <div id="printContent" hidden>
                        {printContent}
                      </div>
                      {/* TABLE GRID ENDS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                      <hr />
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Advance</strong>
                            </label>
                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Advance"
                              required="required"
                              value={this.state.advance}
                              onChange={(e) => this.advanceChange(e)}
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Amount Due</strong>
                            </label>
                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Price"
                              required="required"
                              value={this.state.totalAmoutDue}
                              disabled
                              onChange={(e) => (e) =>
                                this.totalAmuntDueChange(e)}
                              data-error="Price is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Total Amount</strong>
                            </label>

                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Price"
                              required="required"
                              value={this.state.totalPrice}
                              disabled
                              onChange={(e) =>
                                this.setState({ totalPrice: e.target.value })
                              }
                              data-error="Price is required."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            hidden={this.state.isDisable}
                            onClick={this.searchAndPrint}
                          >
                            🖶 PRINT
                          </button>
                        </div>
                      </div>
                    </form>
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

export default AddProduct;
