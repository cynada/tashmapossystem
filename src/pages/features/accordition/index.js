import React, { Component } from 'react';
import AccordionDemo from '../../../widgets/featuare/accordiondemo';
import Pageheading from '../../../widgets/Pageheading';

class FeaturesAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <section className="position-relative">
          <Pageheading foldername={"Features"} title={"Accordion"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*accordion start*/}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <AccordionDemo />
                </div>
              </div>
            </div>
          </section>
          {/*accordion end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default FeaturesAccordion;