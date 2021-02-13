import React, { Component } from 'react';
import AccordionDemo from '../../../widgets/featuare/accordiondemo';
import Pageheading from '../../../widgets/Pageheading';

class Faq extends Component {
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
            <Pageheading foldername={"Utilities"} title={"Frequently Asked Questions"} />
            </section>
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              <section>
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                      <img src={require(`../../../assets/images/about/04.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <AccordionDemo />
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0 order-lg-1">
                      <img src={require(`../../../assets/images/about/04.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                       <AccordionDemo />
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

export default Faq;