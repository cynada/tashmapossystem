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
import {menuItems} from "../menuItems";

const NavLink = (props) => (
  <a href={props.to} {...props}>
    <i className={`fa ${props.icon}`} />
    {props.label}
  </a>
);

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      price: "",
      name: "",
      epf:"",
      nic:"",
      isAdmin:0,
      description: "",
     
      editProductId: "",
      userList:[],
     

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
    CommonGet("users", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          userList: json,
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
      epf:this.state.epf,
      nic:this.state.nic
    };

    CommonUpdateById("users", id, formdata)
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
        CommonGet("users", "")
          .then((res) => res.json())
          .then((json) => {
            console.log("GG" + json);
            this.setState({
              userList: json,
            });
          });
      });
  };

  addProduct = () => {
  
    let formdata = {
      Name: this.state.name,
      Description: this.state.description,
      NIC: this.state.nic,
      EPFNumber: this.state.epf,
      IsAdmin:0,
     
    };
    CommonPost("users", formdata)
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
        CommonGet("users", "")
          .then((res) => res.json())
          .then((json) => {
            console.log("GG" + json);
            this.setState({
              userList: json,
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
      category: e.target.value,
    });
  };

  selectHandler = (id) => {

    let userList =this.state.userList;
    let tableContent =
    userList === undefined
      ? null
      : userList.filter((item) => {
        if(item.id == id){
          return item;
        }
      })
     
      this.setState({
        name : tableContent[0].name ,
        nic : tableContent[0].nic ,
        epf: tableContent[0].epf ,
        description: tableContent[0].description ,
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
  //display values to table

  renderDisplayTable = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            let imageURL = item.image;
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.nic}</td>
                <td>{item.epf}</td>
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
        <Table striped bordered hover id="example">
          <thead>
            <tr>
            
              <th>Full Name</th>
              <th>NIC</th>
              <th>EPF Number</th>
              <th>Edit</th>
              <th>Delete</th>
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
     
    });
  };

  render() {
    let imageURL = this.state.base64string;
    let table = this.renderDisplayTable(this.state.productList);
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
                        <strong>MANAGE USER</strong>
                      </h2>
                      <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸
                      </p>
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
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Full Name"
                              required="required"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                              data-error="Firstname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              id="productName"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="NIC"
                              required="required"
                              value={this.state.nic}
                              onChange={(e) =>
                                this.setState({ nic: e.target.value })
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
                            <input
                              id="form_email"
                              type="text"
                              name="EPF"
                              className="form-control"
                              placeholder="EPF No"
                              required="required"
                              value={this.state.epf}
                              onChange={(e) =>
                                this.setState({ epf: e.target.value })
                              }
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
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
                      <br /> <br />
                      <div className="row">
                        <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.editProduct}
                          >
                            UPDATE USER
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
                            ADD USER
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

export default AddUser;
