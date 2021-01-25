import React, { Component } from 'react';
import Pageheading from '../../../widgets/Pageheading';
import { Link } from 'react-router-dom';

class Bloglisting1 extends Component {
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
        <Pageheading foldername={"Blog"} title={"Blog Listing One"} />
          
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center mb-11">
                <div className="col-12 col-lg-8">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary my-2 my-sm-0 col-auto" type="submit">Search Blog</button>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 mb-6 mb-lg-0">
                  {/* Blog Card */}
                  <div className="card border-0 bg-transparent">
                    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                          <br />July</div>
                    <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/01.png`)} alt="Image" />
                    <div className="card-body pt-5"> <Link className="d-inline-block text-muted mb-2" to="/">Sass</Link>
                      <h2 className="h5 font-weight-medium">
                        <Link className="link-title" to="/blog-single">Bootsland Perfect Performance landing Page</Link>
                      </h2>
                      <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                        </li>
                        <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                        </li>
                        <li className="list-inline-item"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                        </li>
                      </ul>
                    </div>
                    <div />
                  </div>
                  {/* End Blog Card */}
                  <hr className="my-8" />
                  {/* Blog Card */}
                  <div className="card border-0 bg-transparent">
                    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                          <br />July</div>
                    <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/02.png`)} alt="Image" />
                    <div className="card-body pt-5"><Link className="d-inline-block text-muted mb-2" to="/">Marketing</Link>
                      <h2 className="h5 font-weight-medium">
                        <Link className="link-title" to="/blog-single">The most powerfull template that make you.</Link>
                      </h2>
                      <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                        </li>
                        <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                        </li>
                        <li className="list-inline-item"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                        </li>
                      </ul>
                    </div>
                    <div />
                  </div>
                  {/* End Blog Card */}
                  <hr className="my-8" />
                  {/* Blog Card */}
                  <div className="card border-0 bg-transparent">
                    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                          <br />July</div>
                    <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/03.png`)} alt="Image" />
                    <div className="card-body pt-5"> <Link className="d-inline-block text-muted mb-2" to="/">Landing</Link>
                      <h2 className="h5 font-weight-medium">
                        <Link className="link-title" to="/blog-single">A brand for a company is like a reputation person.</Link>
                      </h2>
                      <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                        </li>
                        <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                        </li>
                        <li className="list-inline-item"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                        </li>
                      </ul>
                    </div>
                    <div />
                  </div>
                  {/* End Blog Card */}
                  <div className="row mt-11">
                    <div className="col-12">
                      <nav aria-label="...">
                        <ul className="pagination">
                          <li className="page-item mr-auto"> <Link className="page-link" to="/">Previous</Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">1</Link>
                          </li>
                          <li className="page-item active" aria-current="page"> <Link className="page-link border-0 rounded" to="/">2 <span className="sr-only">(current)</span></Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">3</Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">...</Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">5</Link>
                          </li>
                          <li className="page-item ml-auto"> <Link className="page-link" to="/">Next</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div>
                    <h4 className="mb-5">Recent Stories</h4>
                    <article>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h5 className="h6">
                            <Link className="link-title" to="/blog-single">Bootsland Perfect Performance landing Page</Link>
                          </h5>
                          <Link className="d-inline-block text-muted small font-w-5" to="/">27 November 2019</Link>
                        </div>
                        <img src={require(`../../../assets/images/blog/blog-thumb/01.png`)} className="ml-3" alt="..." />
                      </div>
                    </article>
                    <article className="mt-5">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h5 className="h6">
                            <Link className="link-title" to="/blog-single">The most powerfull template that make you.</Link>
                          </h5>
                          <Link className="d-inline-block text-muted small font-w-5" to="/">15 November 2019</Link>
                        </div>
                        <img src={require(`../../../assets/images/blog/blog-thumb/02.png`)} className="ml-3" alt="..." />
                      </div>
                    </article>
                    <article className="mt-5">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h5 className="h6">
                            <Link className="link-title" to="/blog-single">A brand for a company is like a reputation person.</Link>
                          </h5>
                          <Link className="d-inline-block text-muted small font-w-5" to="/">5 November 2019</Link>
                        </div>
                        <img src={require(`../../../assets/images/blog/blog-thumb/03.png`)} className="ml-3" alt="..." />
                      </div>
                    </article>
                  </div>
                  <div className="mt-11">
                    <h4 className="mb-5">Categories</h4>
                    <ul className="list-unstyled list-group list-group-flush mb-5">
                      <li className="mb-4"> <Link className="list-group-item list-group-item-action border-0 p-0" to="/">
                        All
                              <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">74</span>
                      </Link>
                      </li>
                      <li className="mb-4"> <Link className="list-group-item list-group-item-action border-0 p-0" to="/">
                        Arts and Entertainment
                              <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">23</span>
                      </Link>
                      </li>
                      <li className="mb-4"> <Link className="list-group-item list-group-item-action border-0 p-0" to="/">
                        Featured
                              <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">14</span>
                      </Link>
                      </li>
                      <li className="mb-4"> <Link className="list-group-item list-group-item-action border-0 p-0" to="/">
                        Daily news
                              <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">48</span>
                      </Link>
                      </li>
                      <li> <Link className="list-group-item list-group-item-action border-0 p-0" to="/">
                        Blog Post
                              <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">32</span>
                      </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-11">
                    <h4 className="mb-5">Tags</h4>
                    <div> <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Bootsland</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Web Design</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Saas</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Corporate</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Sass</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Software</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Landing</Link>
                      <Link className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Startup</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Bloglisting1;