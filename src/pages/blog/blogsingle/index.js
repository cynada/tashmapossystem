import React, { Component } from 'react';
import Pageheading from '../../../widgets/Pageheading';
import { Link } from 'react-router-dom';

class BlogSingle extends Component {
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
                <Pageheading foldername={"Blog"} title={"Blog Single"} />
         
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* Blog Card */}
                                    <div className="card border-0 bg-transparent">
                                        <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                      <br />July</div>
                                        <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/01.png`)} alt="Image" />
                                        <div className="card-body pt-5 px-0">
                                            <ul className="list-inline">
                                                <li className="list-inline-item pr-4"> <Link  to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                                                </li>
                                                <li className="list-inline-item pr-4"> <Link  to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                                                </li>
                                                <li className="list-inline-item"> <Link  to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                                                </li>
                                            </ul>
                                            <h2 className="font-weight-medium">
                                                Bootsland Perfect Performance landing Page
                      </h2>
                                            <p>Businesses need access to development resources serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.</p>
                                        </div>
                                        <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Ut atenim ad minim veniam, quis nostrud exerci tation abore et dolore magna aliqua. Uhbt atenim</p>
                                        <blockquote className="card bg-primary-soft border-0 p-5 mt-5 shadow">" Elizabeth ummm I'm telling bodge spend a penny say wellies say James Bond, bubble and squeak a such a fibber you mug quaint cack what.! " <span className="text-primary mt-2">- Romi Lust</span>
                                        </blockquote>
                                        <div className="d-md-flex justify-content-between mt-5 mb-5">
                                            <div>
                                                <h6 className="mb-2">Share: </h6>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><Link  className="text-dark ic-2x" to="/"><i className="la la-facebook" /></Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link  className="text-dark ic-2x" to="/"><i className="la la-dribbble" /></Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link  className="text-dark ic-2x" to="/"><i className="la la-instagram" /></Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link  className="text-dark ic-2x" to="/"><i className="la la-twitter" /></Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link  className="text-dark ic-2x" to="/"><i className="la la-linkedin" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-md-right mt-5 mt-md-0">
                                                <h6 className="mb-2">Tags: </h6>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><Link  className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Web Design</Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link  className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">UX/UI</Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link  className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">Software</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="owl-carousel no-pb" data-dots="false" data-items={2} data-sm-items={1} data-autoplay="true">
                                            <div className="item">
                                                <div className="card border-0 bg-transparent m-4">
                                                    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                            <br />July</div>
                                                    <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/02.png`)} alt="Image" />
                                                    <div className="card-body pt-5"> <Link  className="d-inline-block text-muted mb-2" to="/">Marketing</Link>
                                                        <h2 className="h5 font-weight-medium">
                                                            <Link className="btn-link text-dark" to="/blog-single">The most powerfull template that make you.</Link>
                                                        </h2>
                                                        <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card border-0 bg-transparent m-4">
                                                    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                            <br />July</div>
                                                    <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/03.png`)} alt="Image" />
                                                    <div className="card-body pt-5"> <Link  className="d-inline-block text-muted mb-2" to="/">Marketing</Link>
                                                        <h2 className="h5 font-weight-medium">
                                                            <Link className="btn-link text-dark" to="/blog-single">A brand for a company is like a reputation person.</Link>
                                                        </h2>
                                                        <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card border-0 bg-transparent m-4">
                                                    <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                            <br />July</div>
                                                    <img className="card-img-top shadow rounded" src={require(`../../../assets/images/blog/01.png`)} alt="Image" />
                                                    <div className="card-body pt-5"> <Link  className="d-inline-block text-muted mb-2" to="/">Marketing</Link>
                                                        <h2 className="h5 font-weight-medium">
                                                            <Link className="btn-link text-dark" to="/blog-single">The most powerfull template that make you.</Link>
                                                        </h2>
                                                        <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="mb-8"> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-commenting ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-3">All Comments</h2>
                                            </div>
                                            <div className="media d-block d-md-flex">
                                                <img className="img-fluid shadow rounded" alt="image" src={require(`../../../assets/images/thumbnail/01.jpg`)}  />
                                                <div className="media-body mx-0 mx-md-5 mx-lg-8 my-5 my-md-0">
                                                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                                                        <h6>Ben Miller</h6>  <small className="text-muted">5 Days Ago</small>
                                                    </div>
                                                    <p>Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.</p>
                                                </div> <Link  className="align-items-center d-inline-block btn btn-primary align-self-center" to="/"><i className="ti-comments mr-2" /> Reply</Link>
                                            </div>
                                            <div className="media d-block d-md-flex mt-8 ml-5 ml-md-8 bg-primary-soft rounded shadow p-5">
                                                <img className="img-fluid shadow rounded" alt="image" src={require(`../../../assets/images/thumbnail/02.jpg`)}  />
                                                <div className="media-body mx-0 mx-md-5 mx-lg-8 my-5 my-md-0">
                                                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                                                        <h6>Sasha James</h6>  <small className="text-muted">1 Hours Ago</small>
                                                    </div>
                                                    <p>Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.</p>
                                                </div> <Link  className="align-items-center d-inline-block btn btn-primary align-self-center" to="/"><i className="ti-comments mr-2" /> Reply</Link>
                                            </div>
                                            <div className="media d-block d-md-flex mt-8">
                                                <img className="img-fluid shadow rounded" alt="image" src={require(`../../../assets/images/thumbnail/03.jpg`)}  />
                                                <div className="media-body mx-0 mx-md-5 mx-lg-8 my-5 my-md-0">
                                                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                                                        <h6>Keron Jolie</h6>  <small className="text-muted">2 Week Ago</small>
                                                    </div>
                                                    <p>Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.</p>
                                                </div> <Link  className="align-items-center d-inline-block btn btn-primary align-self-center" to="/"><i className="ti-comments mr-2" /> Reply</Link>
                                            </div>
                                        </div>
                                        <div className="post-comments mt-5">
                                            <div className="mb-8"> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-commenting ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-3">Leave A Comment</h2>
                                            </div>
                                            <form id="contact-form" className="row" method="post" action="contact.php">
                                                <div className="messages" />
                                                <div className="form-group col-sm-6">
                                                    <input id="form_name" type="text" name="name" className="form-control border-0 bg-light" placeholder="Name" required="required" data-error="Name is required." />
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <input id="form_email" type="email" name="email" className="form-control border-0 bg-light" placeholder="Email" required="required" data-error="Valid email is required." />
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <div className="form-group mb-0 col-sm-12">
                                                    <textarea id="form_message" name="message" className="form-control border-0 bg-light h-100" placeholder="Your Comment" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <div className="col-sm-12">
                                                    <button className="btn btn-primary mt-5">Post Comment</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div />
                                    </div>
                                    {/* End Blog Card */}
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

export default BlogSingle;