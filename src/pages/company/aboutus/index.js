import React, { Component } from 'react';
import Memberaboutus from '../../../widgets/aboutus/aboutus';
import FeatureServices from '../../../widgets/featurebox/services';
import Testimonial1 from '../../../widgets/testimonial/testimonial1';
import Blog4 from '../../../widgets/blog/blog4';
import Pageheading from '../../../widgets/Pageheading';



class Aboutus extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>

                <section className="position-relative">
                    <Pageheading foldername={"Company"} title={"About Us"}/>
                </section>
                <div className="page-content">
                    {/*about start*/}
                    <section>
                        <div className="container">
                            <Memberaboutus />
                        </div>
                    </section>
                    {/*about end*/}
                    {/*feature start*/}
                    <section >
                        <div className="container">
                            <FeatureServices bgshadow="bg-white shadow" />
                        </div>
                    </section>
                    {/*feature end*/}
                    {/*testimonial start*/}
                    <section className="position-relative">
                        <div className="shape-2 transform-md-rotate" style={{ overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#1360ef' }} />
                            </svg>
                        </div>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                                    <div> <span className="badge badge-light-soft p-2">
                                        <i className="la la-users ic-3x rotation" />
                                    </span>
                                        <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                                        <p className="lead mb-0 text-white">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                                <Testimonial1 />
                            </div>
                            {/* / .row */}
                        </div>
                    </section>
                    {/*testimonial end*/}
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <Blog4 />
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
            </div>
        );
    }
}

export default Aboutus;