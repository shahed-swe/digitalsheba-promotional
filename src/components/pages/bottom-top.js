import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-1 top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
                            <p className="mb-0 w-100">
                                <span className="fa fa-paper-plane"></span>
                                <span className="text">youremail@email.com</span>
                            </p>
                        </div>
                        <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
                            <div className="social-media">
                                <p className="mb-0 d-flex">
                                    <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
                            <p className="mb-0 register-link"><a href="#" className="btn btn-primary">Book An Appointment</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="container">
                    <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
                        <div className="col-md-4 d-flex mb-2 mb-md-0">
                            <a className="navbar-brand d-flex align-items-center" href="index.html"><span className="flaticon flaticon-health"></span><span>Medex</span></a>
                        </div>
                        <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="fa fa-map"></span>
                            </div>
                            <div className="pr-md-4 pl-md-3 pl-3 text">
                                <p className="con"><span>Free Call</span> <span>+1 234 456 78910</span></p>
                                <p className="con">Call Us Now 24/7 Customer Support</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="text pl-3 pl-md-3">
                                <p className="hr"><span>Our Location</span></p>
                                <p className="con">198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default NavBar;