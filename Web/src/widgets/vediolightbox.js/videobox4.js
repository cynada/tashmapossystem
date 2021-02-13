import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'
import { Button } from 'reactstrap';

class Videobox4 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
       
                <div className="row align-items-center justify-content-center">
                     <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />
                   
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                        <img src={require(`../../assets/images/about/05.png`)} alt="Image" className="img-fluid" />
                        <div className="video-btn video-btn-pos"> <a className="play-btn popup-youtube" onClick={this.openModal} ><i className="la la-play" /></a>
                            <div className="spinner-eff">
                                <div className="spinner-circle circle-1" />
                                <div className="spinner-circle circle-2" />
                            </div>
                        </div>
                    </div>
                </div>
         
       
        );
    }
}

export default Videobox4;