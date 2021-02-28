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
import { menuItems } from "../menuItemsUser";

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
      workDoneBy: 0,
      discount: 0,
      advance: 0,
      totalPrice: 0,
      totalAmountDue: 0,
      customerName: "",
      phoneNumber: "",
      id: 0,
      isDone: false,
      isEdit: false,
      loginUser: "",
      orderNumber: "",
      currentbalance: 0,
      qtyLeft: 0,
      userId:0,
    };
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  componentWillMount() {
    let peticash = sessionStorage.getItem("peticash");
    if (peticash == null || peticash == undefined) {
      this.renderPopupModal();
    }
    else{
      this.setState({
        currentbalance:peticash
      })
    }

    CommonGet("products", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          productList: json,
        });
      });

    CommonGet("categories", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          categoryList: json,
        });
      });
    CommonGet("users", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          userList: json,
        });
      });
    CommonGet("paymentmethods", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          paymentmethods: json,
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {}

  renderPopupModal = () => {
    Swal.fire({
      title: "Enter Peticash amount",
      input: "number",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        let formdata = {
          amount: name,
          ispettycash: 1,
          createdBy: 1,
        };
        sessionStorage.setItem("peticash", name);
        CommonPost("cashier", formdata)
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
            this.setState({
              currentbalance: name,
            });
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })
    // .then((result) => {
    //   if (result.isConfirmed) {
        
    //   }
    // });
  };

  addProduct = () => {
    var itemTotal = this.state.price * this.state.qty;
    var itemTotalWithDiscount = 0;
    if (this.state.discount > 0) {
      itemTotalWithDiscount = (itemTotal * this.state.discount) / 100;
    }
    var totalPriceAddition =
      this.state.totalPrice + itemTotal - itemTotalWithDiscount;

    let formdata = {
      id: this.state.id,
      ProductName: this.state.productName,
      ProductId: this.state.productId,
      Description: this.state.description,
      Price: this.state.price,
      Qty: this.state.qty,
      Discount: this.state.discount,
      CategoryName: this.state.categoryName,
      CategoryId: this.state.categoryId,
      WorkDoneBy: this.state.userId,
      Commission: this.state.commission,
      commissionType: this.state.commissionType,
    };

    var arrayList = this.state.itemList;
    arrayList.push(formdata);
    this.setState({
      itemList: arrayList,
      totalPrice: totalPriceAddition,
      totalAmountDue: totalPriceAddition,
      id: this.state.id + 1,
      isEdit: false,
    });
    $("#example").DataTable().destroy();

    this.resetHandler();
  };

  commissionTypeChange = (e) => {
    var itemTotalForCommission = this.state.price * this.state.qty;
    var commission;
    if (e.target.value == "1") {
      //commission : 5%

      commission = (itemTotalForCommission * 5) / 100;
      this.setState({
        commission: commission,
        commissionType: e.target.value,
      });
    }
    if (e.target.value == "2") {
      //commission : 15%
      commission = (itemTotalForCommission * 15) / 100;
      this.setState({
        commission: commission,
        commissionType: e.target.value,
      });
    }
    if (e.target.value == "3") {
      //commission : other
      this.setState({
        commissionType: e.target.value,
      });
    }
  };

  categoryChange = (e) => {
    let filteredList = this.state.productList.filter(
      (c) => c.CategoryId == e.target.value
    );
    let index = e.nativeEvent.target.selectedIndex;
    console.log(filteredList);
    this.setState({
      categoryId: e.target.value,
      categoryName: e.nativeEvent.target[index].text,
      filteredProductList: filteredList,
    });
  };
  productChange = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let qtyLeft = this.state.filteredProductList.filter(
      (item) => item.Id == e.target.value
    );

    this.setState({
      productId: e.target.value,
      productName: e.nativeEvent.target[index].text,
      qtyLeft: qtyLeft[0].Quantity,
      price: qtyLeft[0].SellingPrice,
      commission: qtyLeft[0].Commission,
    });
  };

  userChange = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  paymentMethodChange = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    this.setState({
      paymentMethodId: e.target.value,
      paymentMethodName: e.nativeEvent.target[index].text,
    });
  };

  selectHandler = (id) => {
    let itemFromPriceList = this.state.itemList;
    var item = itemFromPriceList.filter((item) => item.id == id);
    var itemL = itemFromPriceList.filter((item) => item.id != id);
    var itemFirst = item[0];

    this.setState({
      commissionType: itemFirst.commissionType,
      commission: itemFirst.Commission,
      qty: itemFirst.Qty,
      description: itemFirst.Description,
      categoryId: itemFirst.CategoryId,
      productId: itemFirst.ProductId,
      price: itemFirst.Price,
      workDoneBy: itemFirst.WorkDoneBy,
      discount: itemFirst.Discount,
      isEdit: true,
      itemList: itemL,
    });
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
        this.setState({
          itemList: this.state.itemList.filter((item) => item.id != id),
        });
      }
    });
  }

  renderPrintValues = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            let itemTotal = item.Price * item.Qty;
            let itemDiscount = (itemTotal * item.Discount) / 100;

            return (
              <tr key={item.id}>
                <td>{item.ProductName}</td>
                <td>{item.Description}</td>
                <td>{item.Price}</td>
                <td>{item.Qty}</td>
                <td>{item.Discount}%</td>
                <td style={{ textAlign: "end" }}>{itemTotal - itemDiscount}</td>
              </tr>
            );
          });
    return (
      // <Table striped bordered hover id="example">
      <div class="table-responsive">
        {/* <table id="example" class="display dataTable no-footer" cellspacing="0" width="100%"> */}
        <table
          className="table-bordered hover"
          id="example"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Discount</th>
              <th>Item Total</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
          <br />
          <br />
          <tfoot>
            <tr>
              <br />
              <br />
              <td colSpan="4"></td>
              <td>
                <strong>Total Price : </strong>
              </td>
              <td style={{ textAlign: "end" }}>{this.state.totalPrice}</td>
            </tr>
            <tr>
              <td colSpan="4"></td>
              <td>
                <strong>Advance : </strong>
              </td>
              <td style={{ textAlign: "end" }}>{this.state.advance}</td>
            </tr>
            <tr>
              <td colSpan="4"></td>
              <td>
                <strong>Amount Due : </strong>
              </td>
              <td style={{ textAlign: "end" }}>{this.state.totalAmountDue}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

  //display values to table

  renderDisplayTable = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            let itemTotal = item.Price * item.Qty;
            let itemDiscount = (itemTotal * item.Discount) / 100;
            return (
              <tr key={item.id}>
                {/* <td>{item.CategoryName}</td> */}
                <td>{item.ProductName}</td>
                <td>{item.Description}</td>
                <td>{item.Price}</td>
                <td>{item.Qty}</td>
                <td>{item.Discount}%</td>
                <td>{itemTotal - itemDiscount}</td>
                <td>{item.WorkDoneBy}</td>
                {/* <td>{item.Commission}</td> */}

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
                <td>
                  <a
                    title="Delete "
                    onClick={() => this.formItemDeleteHandler(item.id)}
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
        <Table className="table-striped table-bordered hover" id="example">
          <thead>
            <tr>
              {/* <th>Product Category</th> */}
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Discount</th>
              <th>Item Total</th>
              <th>WDB</th>
              {/* <th>Commission</th> */}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </Table>
      </div>
    );
  };

  //reset form

  resetHandler = () => {
    this.setState({
      commissionType: "",
      commission: "",
      qty: "",
      description: "",
      itemcategory: "",
      itemName: "",
      price: "",
      workDoneBy: "",
      discount: "",
      productId: -1,
      categoryId: -1,
    });
  };

  advanceChange = (e) => {
    var totalAmountDue = this.state.totalPrice - e.target.value;
    totalAmountDue = this.setState({
      advance: e.target.value,
      totalAmountDue: totalAmountDue,
    });
  };
  formValidations = () => {
    let isValid = true;
    let message = "";

    if (this.state.customerName == "") {
      isValid = false;
      message = "Please enter customer name";
    }
    if (this.state.phoneNumber == "") {
      isValid = false;
      message = "Please enter phone number";
    }
    if (this.state.itemList.length <= 0) {
      isValid = false;
      message = "No products in order!";
    }
    if (this.state.paymentMethodId == "") {
      isValid = false;
      message = "Please enter payment method";
    }
    let valid = {
      isValid: isValid,
      message: message,
    };
    return valid;
  };

  searchAndPrint = () => {
    let isValid = this.formValidations();
    if (isValid.isValid) {
      let formdata = {
        CustomerName: this.state.customerName,
        PhoneNumber: this.state.phoneNumber,
        Orders: this.state.itemList,
        IsCompleted: false,
        CompletedDate: null,
        UserId: 1,
        PaymentMethodId: this.state.paymentMethodId,
        Advance: this.state.advance,
        AmountDue: this.state.totalAmountDue,
        TotalAmount: this.state.totalPrice,
        // IsDone : isdone
      };
      let datedata = {
        date: moment().format("YYYY-MM-DD"),
      };
      console.log(datedata, "datedatadatedata");
      CommonPost("orders", formdata)
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
          CommonPost("cashier/getcashierdetails", datedata)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              // this.setState({
              //   currentbalance:js
              // })
            });
        });

      this.printHandler();
      let inititalCashierTotal = sessionStorage.getItem("peticash");
      let amountAdded = this.state.advance;
      let updatedAmount = inititalCashierTotal + amountAdded;

      sessionStorage.setItem("peticash",updatedAmount)
      this.setState({
        currentbalance:updatedAmount
      })
      
    } else {
      Swal.fire(`${isValid.message}`);
    }
  };

  //printhandler******************************************************
  printHandler = (event) => {
    var mywindow = window.open("", "PRINT", "height=600,width=1000");
    mywindow.document.write("<html> <body>");
    mywindow.document.write(
      '<link rel="stylesheet" href="../../../public/bootstrap.min.css" type="text/css" />'
    );

    mywindow.document.write(
      '<div> <img src="../../../public/tashmalogo.jpg" width="100" height="100"/><center> <h3><strong>TASHMA PHOTO STUDIO & DIGITAL LAB<hr/></strong></h3>  </center></div>'
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
      "Customer Name: " + this.state.customerName + "<br/>"
    );
    mywindow.document.write(
      "Phone Number : " + this.state.phoneNumber + "<br/>"
    );
    mywindow.document.write("OrderNo: " + this.state.orderNumber + " <br/>");
    mywindow.document.write("Issued By:" + this.state.loginUser + "");
    mywindow.document.write("<br/><br/><br/>");
    mywindow.document.write("<div>");
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

  renderCategoryDrop = (cate) => {
    let optionItems =
      cate == null || cate == undefined
        ? null
        : cate.map((item) => (
            <option key={item.Id} value={item.Id}>
              {item.CategoryName}
            </option>
          ));

    return (
      <select
        value={this.state.categoryId}
        className="form-control"
        onChange={(e) => this.categoryChange(e)}
      >
        <option key="-1" value="-1">
          Please select a category
        </option>
        {optionItems}
      </select>
    );
  };
  renderUserDrop = (prod) => {
    let optionItems =
      prod == null || prod == undefined
        ? null
        : prod.filter((item) => {
          if(item.ISAdmin == 0){
            return item;
          }
        })
        .map((item) => (
            <option key={item.EPFNumber} value={item.EPFNumber}>
              {item.Name}
            </option>
          ));

    return (
      <select
        value={this.state.userId}
        className="form-control"
        onChange={(e) => this.userChange(e)}
      >
        <option key="-1" value="-1">
          Please select a user
        </option>
        {optionItems}
      </select>
    );
  };
  renderProductDrop = (prod) => {
    let optionItems =
      prod == null || prod == undefined
        ? null
        : prod.map((item) => (
            <option key={item.Id} value={item.Id}>
              {item.Name}
            </option>
          ));

    return (
      <select
        value={this.state.productId}
        className="form-control"
        onChange={(e) => this.productChange(e)}
      >
        <option key="-1" value="-1">
          Please select a product
        </option>
        {optionItems}
      </select>
    );
  };

  renderPaymentMethodDrop = (prod) => {
    let optionItems =
      prod == null || prod == undefined
        ? null
        : prod.map((item) => (
            <option key={item.Id} value={item.Id}>
              {item.Name}
            </option>
          ));

    return (
      <select
        value={this.state.paymentMethodId}
        className="form-control"
        onChange={(e) => this.paymentMethodChange(e)}
      >
        <option key="-1" value="-1">
          Please select a payment method
        </option>
        {optionItems}
      </select>
    );
  };

  qtyChange = (e) => {
    if (this.state.qtyLeft >= e.target.value) {
      this.setState({
        qty: e.target.value,
      });
    } else {
      Swal.fire(`Please Check the Qty!`);
    }
  };

  render() {
    let imageURL = this.state.base64string;
    let table = this.renderDisplayTable(this.state.itemList);
    let printContent = this.renderPrintValues(this.state.itemList);
    let categorydrop = this.renderCategoryDrop(this.state.categoryList);
    let productdrop = this.renderProductDrop(this.state.filteredProductList);
    let userdrop = this.renderUserDrop(this.state.userList);

    let paymentmethoddrop = this.renderPaymentMethodDrop(
      this.state.paymentmethods
    );

    // categoryDropDown = this.categoryDropDownList()
    return (
      <div className="page-content">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <center>
                <img src={LOGO} style={{ width: "250px" }} />
              </center>
              <SideNav
                items={menuItems}
                linkComponent={NavLink}
                chevronComponent={Chevron}
                iconComponent={Icon}
              />
            </div>
          </div>
          <div className="col-md-12" style={{marginLeft:'265px'}}>
            <div className="row">
              <div
                className="col-md-12"
                style={{ backgroundColor: "#293846", color: "white" }}
              >
                <br />
                <div className="form-group">
                  <label>
                    <strong>
                      Current Balance : {this.state.currentbalance}
                    </strong>
                  </label>
                </div>
              </div>
            </div>
            <section className="screenview">
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
                            {categorydrop}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Name</strong>
                            </label>

                            {productdrop}
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
                              <strong>Qty</strong> Remaining qty :{" "}
                              {this.state.qtyLeft}
                            </label>

                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Qty"
                              required="required"
                              value={this.state.qty}
                              onChange={(e) => this.qtyChange(e)}
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
                              disabled
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
                              <strong>Discount(%)</strong>
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
                            {userdrop}
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
                              {/* <option value="1">5%</option>
                              <option value="2">15%</option> */}
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
                            onClick={this.addProduct}
                          >
                            UPDATE ITEM
                          </button>
                        </div>
                        {/* <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.resetHandler}
                          >
                            RESET
                          </button>
                        </div> */}
                        <div className="col-md-3" hidden={this.state.isEdit}>
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
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Payment Method</strong>
                            </label>
                            {paymentmethoddrop}
                          </div>
                        </div>
                      </div>
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
                              placeholder="Amount Due"
                              required="required"
                              value={this.state.totalAmountDue}
                              disabled
                              // onChange={(e) => this.totalAmuntDueChange(e)}
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
                              placeholder="Total Amount"
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
                            🖶 SAVE & PRINT
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
