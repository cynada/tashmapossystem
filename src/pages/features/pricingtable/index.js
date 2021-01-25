import React, { Component } from 'react';
import Pricingplan1 from '../../../widgets/pricingplan/pricingplan1';
import Pricingplan2 from '../../../widgets/pricingplan/pricingplan2';
import Pricingplan3 from '../../../widgets/pricingplan/pricingplan3';
import Pricingplan4 from '../../../widgets/pricingplan/pricingplan4';
import Pricingplan5 from '../../../widgets/pricingplan/pricingplan5';
import Pageheading from '../../../widgets/Pageheading';

class PricingTable extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <section className="position-relative">
          <Pageheading foldername={"Features"} title={"Price Table"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*pricing start*/}
          <section>
            <div className="container-fluid">
              <Pricingplan1 />
            </div>
          </section>
          {/*pricing end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <Pricingplan2 />
            </div>
          </section>
          {/*pricing end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-8">
                <div className="col-12 col-md-12 col-lg-5">
                  <div> <span className="h6 text-primary">
                    Price Table
                    </span>
                    <h2 className="mt-4 mb-0">Simple, Fair and affordable prices for all.</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <Pricingplan3 />
            </div>
          </section>
          {/*pricing end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <Pricingplan4 />
            </div>
          </section>
          {/*pricing end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mb-md-0">
                  <div> <span className="badge badge-primary-soft p-2 font-w-6">
                    Price Table
                    </span>
                    <h2 className="mt-3">Simple, Fair and affordable prices for all.</h2>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <nav>
                    <div className="nav nav-tabs d-flex justify-content-md-end border-0" id="nav-tab" role="tablist"> <a className="nav-item nav-link border-0 active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Monthly</a>
                      <a className="nav-item nav-link border-0" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Yearly</a>
                    </div>
                  </nav>
                </div>
              </div>
              <Pricingplan5 />
            </div>
          </section>
          {/*pricing end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default PricingTable;