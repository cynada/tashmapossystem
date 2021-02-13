import React, { Component } from 'react';
import Feature from '../../../widgets/featurebox/feature';
import Services from '../../../widgets/index/services';
import Skillbox from '../../../widgets/featurebox/skillbox';
import Experience from '../../../widgets/featurebox/experience';
import Servicesbox from '../../../widgets/featurebox/servicesbox';
import Featureskill from '../../../widgets/featurebox/featureskill';
import Feature1 from '../../../widgets/featurebox/feature1';
import Feature2 from '../../../widgets/featurebox/feature2';
import Feature3 from '../../../widgets/featurebox/feature3';
import FeatureServices from '../../../widgets/featurebox/services';
import Pageheading from '../../../widgets/Pageheading';

class FeatureBox extends Component {
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
                    <Pageheading foldername={"Features"} title={"Feature Box"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*feature start*/}
                    <Feature />
                    {/*feature end*/}
                    {/*services start*/}
                    <Services />
                    {/*services end*/}
                    {/*feature start*/}
                    <Skillbox />
                    {/*feature end*/}
                    {/*services start*/}
                    <section className="pt-11 custom-pb-3 bg-primary position-relative">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div>
                                        <h2 className="text-white font-w-5">Creative Design And Creative Services</h2>
                                        <p className="lead mb-0 text-light">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                        </div>
                        <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                            </svg>
                        </div>
                    </section>
                    <section className="mt-n15">
                        <div className="container">
                            <FeatureServices bgshadow="bg-white shadow"/>
                        </div>
                    </section>
                    {/*services end*/}
                    {/*service start*/}
                    <Experience />
                    {/*service end*/}
                    {/*services start*/}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                        What We Offerd
                </span>
                                        <h2 className="mt-3 font-w-5">Creative Design And Creative Services</h2>
                                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>

                            <FeatureServices bgshadow="" />
                        </div>
                    </section>
                    {/*services end*/}
                    {/*service start*/}
                    <Servicesbox />
                    {/*service end*/}
                    {/*services start*/}
                    <Feature3 />
                    {/*services end*/}
                    {/*services start*/}
                    <Feature2 />
                    {/*services end*/}
                    {/*services start*/}
                    <Feature1 />
                    {/*services end*/}
                    {/*services start*/}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8">
                                    <div> <span className="badge badge-primary-soft p-2">
                                        <i className="la la-cubes ic-3x rotation" />
                                    </span>
                                        <h2 className="mt-3">Awesome Bootsland App Feature</h2>
                                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>
                            <Featureskill />
                        </div>
                    </section>
                    {/*services end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default FeatureBox;