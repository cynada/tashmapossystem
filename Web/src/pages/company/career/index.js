import React, { Component } from 'react';
import Infomation from '../../../widgets/career/infomation';
import PortfolioInfo from '../../../widgets/career/portfolio';
import Pageheading from '../../../widgets/Pageheading';

class Career extends Component {
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
                    <Pageheading foldername={"Company"} title={"Career"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*about us start*/}
                    <Infomation />
                    {/*about us end*/}
                    {/*open position start*/}
                    <PortfolioInfo />
                    {/*open position end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default Career;