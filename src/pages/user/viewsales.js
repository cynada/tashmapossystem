import React, { Component } from "react";

import { Bar, Line, Pie, Doughnut, Polar } from "react-chartjs-2";
import LOGO from "../../assets/images/PLk.jpg";

import { SideNav, Chevron, Icon } from "react-side-nav";

const menuItems = [
  {
    id: 1,
    label: "Manage Products",
    icon: "fas fa-battery-half",
    link: "/admin-addproducts",
    items: [
      { id: 11, label: "Item 1.1", icon: "fas fa-car", link: "/item11" },
      { id: 12, label: "Item 1.2", icon: "fas fa-bullhorn", link: "/item12" },
    ],
  },
  {
    id: 2,
    label: "View Orders",
    icon: "fas fa-battery-half",
    link: "/admin-vieworders",
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
class viewsales extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    const data3 = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "2020 Completed Orders",
          backgroundColor: "rgba(22, 160, 152,1)",
          //borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,

          data: [10, 20, 30, 40, 50, 40, 20, 35, 10, 80, 10, 50],
        },
        {
          label: "2020 Received Orders",
          backgroundColor: "rgba(255,99,132,1)",
          //borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,

          data: [30, 60, 30, 40, 50, 20, 20, 35, 50, 80, 20, 50],
        },
      ],
    };

    return (
      <div className="page-content">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <center>
                <img src={LOGO} style={{ width: "150px" }} />
              </center>
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
                        <strong>VIEW SALES</strong>
                      </h2>
                       <p className="lead mb-0 ">Tashma Studio & Digital Lab</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 90">📸</p>
                    </div><br/><br/>
                    <Bar
                              data={data3}
                              width={50}
                              height={20}
                              options={{
                                maintainAspectRatio: true,
                                scales: {
                                  xAxes: [
                                    {
                                      ticks: {
                                        fontSize: 8,
                                      },
                                    },
                                  ],
                                },
                              }}
                            />
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

export default viewsales;
