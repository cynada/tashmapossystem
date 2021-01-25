import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pageheading from '../../../widgets/Pageheading';

class OrderComplate extends Component {
  render() {
    return (
      <div>
        {/*hero section start*/}
        <section className="position-relative">
          <Pageheading foldername={"Shop"} title={"Order Complete"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          <section className="text-center pb-11">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="mb-4">Thank you for purchasing, Your order is complete</h3>
                  <Link className="btn btn-primary mr-3" to="/">Homes</Link>
                  <Link className="btn btn-primary" to="/product-grid">Continue Shoppings</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default OrderComplate;