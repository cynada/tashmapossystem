import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import {Navbar,NavDropdown,Nav,FormControl} from "react-bootstrap";
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
];const NavLink = (props) => (
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
  };

  constructor(props) {
    super(props);

    
  }

  componentWillMount() {
    CommonGet("orders", "")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          orderList: json,
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



 

  modalOpen = (id) => {
    sessionStorage.setItem("order",id);
    this.props.history.push('./admin-editorder');
    //window.alert(id);
    // CommonGetById("orders", id)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("GG" + json);
    //     this.setState({
    //       order: json,
    //     });
    //   })
    //   .then(() => {
    //     this.setState({
    //       isModalOpen: true,
    //     });
    //   });
  };
  renderDisplay = (contetnts) => {
    let tableContent =
      contetnts === undefined || contetnts === null
        ? null
        : contetnts.map((item) => {
            //Progress
            let IsCompleted = item.IsCompleted == 1 ? "Yes" : "No";
            return (
              <tr key={item.OrderId}>
                <td>{item.OrderId}</td>
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
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Order Details</th>
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
  <img src={LOGO} style={{ width: "250px" }} />          </center>
         
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
