import React, { Component } from 'react';
import Gallrylist from '../../../widgets/portfolio/gallrylist';
import Pageheading from '../../../widgets/Pageheading';

class Gallery extends Component {
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
          <Pageheading foldername={"Features"} title={"Gallery"} />
        </section>
        {/*hero section end*/} 
        {/*body content start*/}
        <div className="page-content">
          {/*portfolio start*/}
          <section>
            <Gallrylist />
          </section>
          {/*portfolio end*/}
        </div>
        {/*body content end*/}
      </div>
        );
    }
}

export default Gallery;