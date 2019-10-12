import React, { Component, Fragment } from 'react';
import HomeSlider from '../../widgets/HomSlider/HomSlider';
import { Link } from 'react-router-dom';
import navLinks from '../../NavLinks.js';

import { Row, Col, Container } from 'reactstrap';
import ProductSlider from '../../widgets/ProductSlider/ProductSlider';
import FurnitureSlider from '../../widgets/FurnitureSlider/FurnitureSlider';
import './home.css';

import {
    Modal, ModalHeader, ModalBody, Nav, NavItem, NavLink, TabContent, TabPane, Navbar, NavbarToggler, Collapse,
    UncontrolledDropdown, DropdownMenu, DropdownItem
} from 'reactstrap';

const saleslider = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const furnitureSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const footerSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeout: true,
            modal: false,
            activeTab: '1',
            isOpen: false,
            collapsed: true,
            CartHide: true,
            classset: '',

        }

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
   
    OpenSubmenuOpen(id) {
        var elm = document.getElementById(id);
        if (elm != null) {
            document.getElementById(id).setAttribute("class", "dropdown-menu dropdown-menu-right show")
        }
    }
    OpenSubmenuClose(id) {
        var elm = document.getElementById(id);
        if (elm != null) {
            document.getElementById(id).setAttribute("class", "dropdown-menu dropdown-menu-right")
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <HomeSlider />
                <div className="landing-home-nav">
                    <Row>
                        <Col lg={4}>
                            <div class="nav-right">
                                <img className="nav-imgae-1" src={require(`../../assets/images/image/Gadgets-01.png`)} />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="m-portlet m-portlet--mobile">
                                <div class="m-portlet__head">
                                    <div class="row">
                                        <div class="col-6 text-left">
                                            <h1 class="nav-h1">FICTION</h1>
                                        </div>
                                        <div class="col-6 text-right font-italic">
                                            <h3 class="nav-h3">Explore</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-portlet__body">
                                    <Row>
                                        <ProductSlider settings={saleslider} />
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="middle-link-slider">
                    <div class="middle-slider-nav">
                        <div class="middle-slider-left">
                            <div class="middle-slider-text">
                                <h1 class="middle-slider-text-header">NEW ARRIVAL</h1>
                                <div class="nav">
                                    <ul class="nav nav-link-ul d-flex d-inline-flex">
                                        <li class="nav-item d-inline-flex  align-items-center mr-2">
                                            <Link to="/Men" className="Men-link font-italic" rel="nofollow">Men</Link>
                                        </li> |
                                            <li class="nav-item d-inline-flex  align-items-center mr-2">
                                            <Link to="/Women" className="Men-link font-italic" rel="nofollow">&nbsp; Women</Link>
                                        </li> |
                                            <li class="nav-item d-inline-flex  align-items-center mr-2">
                                            <Link to="/Electronics" className="Men-link font-italic" rel="nofollow"> &nbsp;Electronics</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav">
                                    <ul class="nav nav-link-ul d-flex d-inline-flex">
                                        <li class="nav-item d-inline-flex  align-items-center mr-2">
                                            <Link to="/book" className="Men-link font-italic" rel="nofollow">Books</Link>
                                        </li> |
                                            <li class="nav-item d-inline-flex  align-items-center mr-2">
                                            <Link to="/furniture" className="Men-link font-italic" rel="nofollow">&nbsp; Furniture</Link>
                                        </li>
                                    </ul>
                                </div>
                                <p class="middle-slider-detail font-italic">
                                    Visit the shop page to checkout<br />
                                    the new arrivals of this week.
                                    </p>
                                <div class="see-detail-bound">
                                    <hr class="bound-hr" />
                                </div>
                                <div class="detail-see">
                                    <Link to="/more-see" class="btn-more-see">SEE ALL</Link>
                                </div>
                            </div>
                        </div>
                        <div class="furniter-slider-div text-right">
                            <div class="funiter-slider-content">
                                <Row>
                                    <FurnitureSlider settings={furnitureSlider} />
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-home-nav">
                    <Row>
                        <Col lg={8}>
                            <div class="m-portlet m-portlet--mobile">
                                <div class="m-portlet__head">
                                    <div class="row">
                                        <div class="col-6 text-left">
                                            <h1 class="nav-h1">ACADEMIC</h1>
                                        </div>
                                        <div class="col-6 text-right font-italic">
                                            <h3 class="nav-h3">Explore</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-portlet__body">
                                    <Row>
                                        <ProductSlider settings={saleslider} />
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="nav-right">
                                <img className="nav-imgae-1" src={require(`../../assets/images/image/Discount-01.png`)} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="main-content-img">
                    <Row>
                        <Col lg={6}>
                            <div class="main-content-left">
                                <div class="main-offer-imag">
                                    <img class="offer-image" src={require(`../../assets/images/image/Offers-01.png`)}></img>
                                </div>
                                <div class="content-text">
                                    <h1 class="content-header">BEST</h1>
                                    <h1 class="content-header">OFFERS</h1>
                                    <div class="detail-see-offer">
                                        <Link to="/more-see-offer" class="btn-more-see-offer">SEE ALL</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div class="main-content-left">
                                <div class="main-offer-imag">
                                    <img class="offer-image" src={require(`../../assets/images/image/Now-01.png`)}></img>
                                </div>
                                <div class="content-text">
                                    <h1 class="content-header">START</h1>
                                    <h1 class="content-header">NOW</h1>
                                    <div class="detail-see-offer">
                                        <Link to="/more-see-start" class="btn-more-see-offer">SEE ALL</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="main-content-img">
                    <div class="m-portlet m-portlet--mobile">
                        <div class="m-portlet__head">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <h1 class="nav-footer-h1">CHILDREN’S COLLECTION</h1>
                                </div>
                                <div class="col-4 text-right font-italic">
                                    <h3 class="nav-h3">Explore</h3>
                                </div>
                            </div>
                        </div>
                        <div class="m-portlet__body">
                            <Row>
                                <ProductSlider settings={footerSlider} />
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    ;
}

export default HomePage;