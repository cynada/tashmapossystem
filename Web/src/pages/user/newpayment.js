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
import {menuItems} from "../menuItemsUser";

const NavLink = (props) => (
  <a href={props.to} {...props}>
    <i className={`fa ${props.icon}`} />
    {props.label}
  </a>
);

class NewPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     description:"",
     amount:""
    };
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  componentWillMount() {
    
  }

  componentDidMount() {
   
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
  }


  resetHandler = () => {
   
  };

  render() {
   
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
                        <strong>NEW PAYMENT</strong>
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
                      <div className="col-md-3">
                          </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <textarea
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Description"
                              required="required"
                              value={this.state.description}
                              onChange={(e) =>
                                this.setState({ description: e.target.value })
                              }
                              data-error="Firstname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div></div>
                        <div className="row">
                        <div className="col-md-3">
                          </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              id="form_name"
                              type="number"
                              name="name"
                              className="form-control"
                              placeholder="Amount"
                              required="required"
                              value={this.state.amount}
                              onChange={(e) =>
                                this.setState({ amount: e.target.value })
                              }
                              data-error="Firstname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            hidden={this.state.isDisable}
                            onClick={this.submit}
                          >
                            Submit
                          </button>
                          </div>
                        </div>
                        
                      <br />
                      <br />
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

export default NewPayment;
