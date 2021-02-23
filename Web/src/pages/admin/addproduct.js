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
import { menuItems } from "../menuItems";

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
      pictures: [],
      price: "",
      productName: "",
      description: "",
      categoryId: -1,
      sellingPrice: "",
      qty: "",
      category: "",
      brand: "",
      editProductId: "",
      base64string:
        "https://lh3.googleusercontent.com/proxy/e0eh1T0oEXKbYGCgFPdsNigBDZqlbuNO0yaHTXYP1ASL-CoiEnZOBAw3jdywchu1E8IpEgYusbNKwHZ6UkwjsBxr9KaLpADQdGGf_2y7BG_BFTQuwf21kcNh9sM1",

      editProduct: [],
      productList: [],
      orders: [],
      isPopupModal: false,

      isEdit: false,
      isDisable: false,
    };
    this.onDrop = this.onDrop.bind(this);
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
     
    CommonGet("categories", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          categoryList: json,
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

  onDrop(e) {
    let file = e.target.files[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        this.setState({
          base64string: Base64,
        });
      };
    }
  }

  handleReaderLoader = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    this.setState({
      base64string: btoa(binaryString),
    });
  };

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
    let formdata = {
      CategoryId: this.state.categoryId,
      Name: this.state.productName,
      Description: this.state.description,
      BuyingPrice: this.state.price,
      SellingPrice: this.state.sellingPrice,
      Quantity: this.state.qty,
      Commission: this.state.commission,
    };
    console.log(formdata);
    CommonPost("products", formdata)
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
          })
          .then(() => {
            this.jqueryScripts();
          });
      });
    //swal("Product Added Successfully!");
    // alert(JSON.stringify(formdata));
  };

  stockChange = () => {
    this.setState({
      inStock: true,
    });
  };

  categoryChange = (e) => {
    this.setState({
      categoryId: e.target.value,
    });
  };

  selectHandler = (id) => {
    //https://premiumlkbackend.azurewebsites.net/api/products/5fb2c01dccbaf0005a97ba77
    CommonGetById("products", id)
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          editProduct: json,
          isEdit: true,
          isDisable: true,
        });
      })
      .then(() => {
        let editProduct = this.state.editProduct;
        this.setState({
          productName: editProduct.name,
          description: editProduct.description,
          price: editProduct.price,
          category: editProduct.category,
          base64string: editProduct.image,
          instock: editProduct.countInStock,
          brand: editProduct.brand,
          editProductId: editProduct._id,
        });
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
  //display values to table

  renderDisplayTable = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            let imageURL = item.image;
            return (
              <tr key={item._id}>
                <td>{item.CategoryName}</td>
                <td>{item.Name}</td>
                <td>{item.BuyingPrice}</td>
                <td>{item.Quantity}</td>
                <td>{item.SellingPrice}</td>
                <td>{item.Description}</td>

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
              <th>Bought Price</th>
              <th>Qty</th>
              <th>Selling Price</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
            {/* <tr>
  <td>GG1</td>
  <td>YY</td>
  <td>GG1</td>
  <td>GG1</td>
</tr>
<tr>
  <td>FF1</td>
  <td>BB</td>
  <td>FF</td>
  <td>CC</td>
</tr> */}
          </tbody>
        </Table>
      </div>
    );
  };

  //reset form

  resetHandler = () => {
    this.setState({
      price: "",
      productName: "",
      description: "",
      categoryId: -1,
      instock: "",
      category: "",
      brand: "",
      editProductId: "",
      base64string:
        "https://lh3.googleusercontent.com/proxy/e0eh1T0oEXKbYGCgFPdsNigBDZqlbuNO0yaHTXYP1ASL-CoiEnZOBAw3jdywchu1E8IpEgYusbNKwHZ6UkwjsBxr9KaLpADQdGGf_2y7BG_BFTQuwf21kcNh9sM1",
      editProduct: [],
      isEdit: false,
      isDisable: false,
    });
  };

  renderPopupModal = () => {
    Swal.fire({
      title: "Enter category",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        let formdata = {
          CategoryName: name,
        };

        CommonPost("categories", formdata)
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
            CommonGet("categories", "")
              .then((res) => res.json())
              .then((json) => {
                console.log("GG" + json);
                this.setState({
                  categoryList: json,
                });
              })
              .then(() => {
                this.jqueryScripts();
              });
          });

        // return fetch(`//api.github.com/users/${name}`)
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText);
        //     }
        //     return response.json();
        //   })
        //   .catch((error) => {
        //     Swal.showValidationMessage(`Request failed: ${error}`);
        //   });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
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

  render() {
    let imageURL = this.state.base64string;
    let table = this.renderDisplayTable(this.state.productList);
    let categorydrop = this.renderCategoryDrop(this.state.categoryList);
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
                        <strong>MANAGE PRODUCT</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <form id="contact-form">
                      <div className="row">
                        <div className="col-md-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.renderPopupModal}
                          >
                            + Category
                          </button>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Category</strong>
                            </label>
                            {categorydrop}
                            {/* <select
                              className="form-control"
                              value={this.state.category}
                              onChange={(e) =>
                                this.setState({ category: e.target.value })
                              }
                            >
                              <option value="-1">-Please Select-</option>{" "}
                              <option value="Albums">Albums</option>
                              <option value="DesignPhoto">DesignPhoto</option>
                              <option value="Photo">Photo</option>
                            </select> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Name</strong>
                            </label>
                            <input
                              id="productName"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Name"
                              required="required"
                              value={this.state.productName}
                              onChange={(e) =>
                                this.setState({ productName: e.target.value })
                              }
                              data-error="Lastname is required."
                            />
                            <div className="help-block with-errors" />
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
                              <strong>Buying Price</strong>
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
                              <strong>Selling Price</strong>
                            </label>
                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Price"
                              required="required"
                              value={this.state.sellingPrice}
                              onChange={(e) =>
                                this.setState({ sellingPrice: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>
                              <strong>Commission %</strong>
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
                      {/* <div className="row">
                        <div className="col-md-6">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Select an Image</Form.Label>
                            <div class="input-group">
                              <input
                                type="file"
                                id="my-custom-design-upload"
                                class="btn btn-success"
                                onChange={(e) => this.onDrop(e)}
                              />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <img
                            src={imageURL}
                            width={100}
                            style={{ width: "327px" }}
                          />
                        </div>
                      </div> */}
                      <br /> <br />
                      <div className="row">
                        <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.editProduct}
                          >
                            UPDATE PRODUCT
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
                        <div className="col-md-12 text-center">
                          <button
                            type="button"
                            className="btn btn-primary"
                            hidden={this.state.isDisable}
                            onClick={this.addProduct}
                          >
                            ADD PRODUCT
                          </button>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div>{table}</div>
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
