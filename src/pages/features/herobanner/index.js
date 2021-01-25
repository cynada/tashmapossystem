import React, { Component } from 'react';
import Herosection from '../../../widgets/herosection/herosection';
import Herosection1 from '../../../widgets/herosection/herosection1';
import Herosection2 from '../../../widgets/herosection/herosection2';
import Herosection3 from '../../../widgets/herosection/herosection3';
import Herosection4 from '../../../widgets/herosection/herosection4';
import Herosection5 from '../../../widgets/herosection/herosection5';
import Herosection6 from '../../../widgets/herosection/herosection6';
import Herosection7 from '../../../widgets/herosection/herosection7';
import Herosection8 from '../../../widgets/herosection/herosection8';
import Pageheading from '../../../widgets/Pageheading';

class HeroBanner extends Component {
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
        <Pageheading foldername={"Features"} title={"Hero Banner"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*hero section start*/}
          <section>
            <div className="container">
              <Herosection />
            </div>
          </section>
          {/*hero section end*/}
          {/*hero section start*/}
          <Herosection1 />
          {/*hero section end*/}
          {/*hero section start*/}
          <Herosection2 />
          {/*hero section end*/}
          {/*hero section start*/}
          <Herosection3 />
          {/*hero section end*/}
          {/*hero section start*/}
          <Herosection4 />
          {/*hero section end*/}
          {/*hero section start*/}
          <Herosection5 />
          {/*hero section end*/}
          {/*hero section start*/}
          <section>
            <div className="container">
              <Herosection6 />
            </div>
          </section>
          {/*hero section end*/}
          {/*hero section start*/}
          <section>
            <div className="container">
              <Herosection7 />
            </div>
          </section>
          {/*hero section end*/}
          {/*hero section start*/}
          <section>
            <div className="container">
              <Herosection8 />
            </div>
          </section>
          {/*hero section end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default HeroBanner;