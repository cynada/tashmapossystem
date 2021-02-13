import React, { Component } from 'react';
import Blog1 from '../../../widgets/blog/blog1';
import Blog2 from '../../../widgets/blog/blog2';
import Blog3 from '../../../widgets/blog/blog3';
import Blog4 from '../../../widgets/blog/blog4';
import Pageheading from '../../../widgets/Pageheading';

class BlogDemo extends Component {
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
        <Pageheading foldername={"Features"} title={"Blog"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog1 />
            </div>
          </section>
          {/*blog end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                    Latest News
                        </span>
                    <h2 className="mt-3">From Our Blog List Latest Feed</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog2 />
            </div>
          </section>
          {/*blog end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                  <div> <span className="h6 text-primary">
                    News Feed
                        </span>
                    <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog3 />
            </div>
          </section>
          {/*blog end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog4 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default BlogDemo;