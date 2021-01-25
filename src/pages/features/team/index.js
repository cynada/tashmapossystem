import React, { Component } from 'react';
import Team1 from '../../../widgets/team/team1';
import Team2 from '../../../widgets/team/team2';
import Team3 from '../../../widgets/team/team3';
import Pageheading from '../../../widgets/Pageheading';

class Team extends Component {
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
              <Pageheading foldername={"Features"} title={"Team"} />
            </section>
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*team start*/}
              <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          Bootsland Team
                        </span>
                        <h2 className="mt-3">Meet Our Team Of Expert</h2>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                    <Team1 />
                </div>
              </section>
              {/*team end*/}
              {/*team start*/}
              <section>
                <div className="container-fluid px-lg-8">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-4 mb-8 mb-lg-0">
                      <div> <span className="h6 text-primary">
                          Bootsland Team
                        </span>
                        <h2 className="mt-3">Meet Our Team Of Expert</h2>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                    <Team2 />
                   </div>
                  {/* / .row */}
                </div>
              </section>
              {/*team end*/}
              {/*team start*/}
              <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img={require(`../../../assets/images/bg/02.png`)}>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="h6 text-primary">
                          Bootsland Team
                        </span>
                        <h2 className="mt-3 font-w-5 text-white">Meet Our Team Of Expert</h2>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                  <div className="row justify-content-center">
                    <div className="col">
                    <Team3 />
                    </div>
                  </div>
                </div>
                <div className="shape-1" style={{height: '200px', overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                  </svg>
                </div>
                <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                  </svg>
                </div>
              </section>
              {/*team end*/}
            </div>
            {/*body content end*/}
          </div>
        );
    }
}

export default Team;