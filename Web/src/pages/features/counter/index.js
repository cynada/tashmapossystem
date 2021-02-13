import React, { Component } from 'react';
import Counter1 from '../../../widgets/counter/counter1';
import Counter3 from '../../../widgets/counter/counter3';
import Counter2 from '../../../widgets/counter/counter2';
import Pageheading from '../../../widgets/Pageheading';

class CounterDemo extends Component {
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
          <Pageheading foldername={"Features"} title={"Counter"} />
     
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*counter start*/}
          <section>
            <div className="container">
              <Counter1 />
            </div>
          </section>
          {/*counter end*/}
          {/*counter start*/}
          <section>
            <div className="container">
              <Counter2 />
            </div>
          </section>

          {/*counter end*/}
          {/*counter start*/}
          <section>
            <div className="container">
              <Counter3 />
            </div>
          </section>
          {/*counter end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default CounterDemo;