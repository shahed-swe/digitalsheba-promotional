import React, { Component } from 'react';
import logo from '../assets/images/logo.png';


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
                                <span className="text"> @shahedtalukder51</span>
                            </p>
                        </div>
                        <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
                            <div className="social-media">
                                <p className="mb-0 d-flex">
                                    <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                    <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                    <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                    <a href="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
                            <p className="mb-0 register-link"><a href="/" className="btn btn-success">Book An Appointment</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="container">
                    <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
                        <div className="col-md-4 d-flex mb-2 mb-md-0">
                            <a className="navbar-brand d-flex align-items-center" href="/">
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="fa fa-map"></span>
                            </div>
                            <div className="pr-md-4 pl-md-3 pl-3 text">
                                <p className="con"><span>Free Call</span> <span>+880 017 621 76238</span></p>
                                <p className="con">Call Us Now 24/7 Customer Support</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="text pl-3 pl-md-3">
                                <p className="hr"><span>Our Location</span></p>
                                <p className="con">Khagan Bazar, Ashulia, Savar, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span> Menu
			</button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Services</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Doctors</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Departments</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Pricing</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Gallery</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

class Footer extends Component{
    render(){
        return(
            <footer className="ftco-footer">
                <div className="container mb-5 pb-4">
                    <div className="row">
                        <div className="col-lg col-md-6">
                            <div className="ftco-footer-widget">
                                <img src={logo} alt=""/>
                                <p>Far far away, behind the word mountains, far from the countries.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-primary py-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-0">Copyright &copy;2020 All rights reserved | This template is made  by Young DevOps</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export {NavBar, Footer};