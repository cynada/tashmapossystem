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
import {menuItems} from "../../menuItems";

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

  state={
    month:"",
    user:"",
    epf:"",
    year:"",
    commissionList:[]
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };
  componentWillMount() {
    // CommonGet("products", "")
    // .then((res) => res.json())
    // .then((json) => {
    //   console.log("GG" + json);
    //   this.setState({
    //     productList: json,
    //   });
    // })
    // .then(() => {
    //   this.jqueryScripts();
    // });
  }

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
                <td>{item.Name}</td>
                <td>{item.OrderId}</td>
                <td>{item.Commission}</td>
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
              <th>Name</th>
              <th>Order Id</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </Table>
      </div>
    );
  };

  renderCategoryDrop = () => {
    return (
      <select
        value={this.state.month}
        className="form-control"
        // onChange={(e) => this.categoryChange(e)}
      >
        <option key="-1" value="-1"> Please select a month</option>
        <option key="1" value="1"> January</option>
        <option key="2" value="2"> February </option>
        <option key="3" value="3"> March</option>
        <option key="4" value="4"> April</option>
        <option key="5" value="5"> May</option>
        <option key="6" value="6"> June</option>
        <option key="7" value="7"> July</option>
        <option key="8" value="8"> August</option>
        <option key="9" value="9"> September</option>
        <option key="10" value="10"> October</option>
        <option key="11" value="11"> November</option>
        <option key="12" value="12"> December</option>

      </select>
    );
  };

  renderProductDrop = () => {
    return (
      <select
        value={this.state.month}
        className="form-control"
        // onChange={(e) => this.categoryChange(e)}
      >
        <option key="-1" value="-1"> Please select a month</option>
        <option key="1" value="1"> January</option>
        <option key="2" value="2"> February </option>
        <option key="3" value="3"> March</option>
        <option key="4" value="4"> April</option>
        <option key="5" value="5"> May</option>
        <option key="6" value="6"> June</option>
        <option key="7" value="7"> July</option>
        <option key="8" value="8"> August</option>
        <option key="9" value="9"> September</option>
        <option key="10" value="10"> October</option>
        <option key="11" value="11"> November</option>
        <option key="12" value="12"> December</option>

      </select>
    );
  };
  searchComm = () => {

    let formdata = {
      year :this.state.year,
      month:this.state.month,
      epfnumber:this.state.epf
    }
    CommonPost("commissions/usercommission", "formdata")
    .then((res) => res.json())
    .then((json) => {
      console.log("GG" + json);
      this.setState({
        commissionList: json,
      });
    })
    .then(() => {
      this.jqueryScripts();
    });

  }

  render() {
    let categorydrop = this.renderCategoryDrop();
    let productdrop = this.renderProductDrop();
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
                    <form id="contact-form">
                      <div className="messages" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>Month</strong>
                            </label>
                            {categorydrop}
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
                              placeholder="EPF Number"
                              required="required"
                              value={this.state.epf}
                              onChange={(e) =>
                                this.setState({ epf: e.target.value })
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
                              placeholder="Year"
                              required="required"
                              value={this.state.year}
                              onChange={(e) =>
                                this.setState({ year: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              <strong>User Name</strong>
                            </label>

                            {productdrop}
                          </div>
                        </div> */}
                      </div>
                      <div className = "row">
                      <div className="col-md-3">
                      <button
                        type="button"
                        className="btn btn-primary"
                        hidden={this.state.isDisable}
                        onClick={this.searchComm}
                      >
                        SEARCH ITEM
                      </button>
                    </div>
                        </div>
                    </form>
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
export default commissionreport;
