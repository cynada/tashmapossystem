import React, { Component } from 'react';
import Blog4 from '../../../widgets/blog/blog4';
import Bigblog from '../../../widgets/blog/bigblog';
import Pageheading from '../../../widgets/Pageheading';


class BlogCard extends Component {
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
        <Pageheading foldername={"Blog"} title={"Blog Card Style"} />
         
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*blog start*/}
          <section>
            <div className="container">
              <Blog4 />
              <Bigblog />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default BlogCard;