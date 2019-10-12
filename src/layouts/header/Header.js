import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import navLinks from '../../NavLinks.js';

import logo from '../../assets/images/image/Logo-Header.png';
import { Row, Col, Container } from 'reactstrap';
// import Loader from 'react-loader-spinner';
import {
    Modal, ModalHeader, ModalBody, Nav, NavItem, NavLink, TabContent, TabPane, Navbar, NavbarToggler, Collapse,
    UncontrolledDropdown, DropdownMenu, DropdownItem
} from 'reactstrap';

import classnames from 'classnames';
import './header.css';
import '../../assets/css/flaticon.css';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.ReadCartItems = this.ReadCartItems.bind(this);
        this.ReadWishListItems = this.ReadWishListItems.bind(this);
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
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.ShowCart = this.ShowCart.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    logintoggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
            var modal_tag = document.getElementById("div-modal").getAttribute("class");
            if (modal_tag === "div-modal") {
                document.getElementById("div-modal").setAttribute("class", "div-modal-signup");
            }
            else {
                document.getElementById("div-modal").setAttribute("class", "div-modal");
            }

        }
    }

    ReadCartItems() {
        return JSON.parse(localStorage.getItem("LocalCartItems"));
    }
    removeFromCart = (Index) => {
        var UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
        UpdatedCart = UpdatedCart.slice(0, Index).concat(UpdatedCart.slice(Index + 1, UpdatedCart.length));
        localStorage.removeItem("LocalCartItems");
        localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
    }

    ReadWishListItems() {
        return JSON.parse(localStorage.getItem("LocalWishListItems"));
    }



    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll(event) {
    //     var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
    //         document.body.scrollTop;

    //     if (scrollTop > 100) {
    //         document.getElementById("site-header").setAttribute("class", "site-header headerBar is-sticky");
    //     } else {
    //         document.getElementById("site-header").setAttribute("class", "site-header headerBar");
    //     }
    // }

    ShowCart() {
        if (this.state.CartHide === true) {
            var elm = document.getElementById("DivCartContent");
            if (elm != null) {
                document.getElementById("DivCartContent").setAttribute("style", "display:block");
                this.state.CartHide = false;
            }
        }
    }

    HideCart() {
        var elm = document.getElementById("DivCartContent");
        if (elm != null) {
            document.getElementById("DivCartContent").setAttribute("style", "display:none");
            this.state.CartHide = true;
        }
    }

    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
    onClickClassAdd(pages) {
        if (this.state.classset !== pages) {
            this.setState({
                ...this.state,
                classset: pages
            })
        }
        else {
            if (Object.keys(this.state.classset).length === 0) {
                this.setState({
                    ...this.state,
                    classset: pages
                })
            }
            else {
                this.setState({
                    ...this.state,
                    classset: ''
                })
            }
        }

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
    render() {
        let pathnames = document.location.href;
        let pathArray = pathnames.split('/');
        let pageName = '/' + pathArray[pathArray.length - 1];
        if (this.state.timeout === true) {
            setTimeout(function () {
                this.setState({ timeout: false });
            }.bind(this), 2000);  // wait 5 seconds, then reset to false
        }

        return (
            <header className="site-header headerBar" id="site-header">
                <div >
                    <div className="topbar topbar-bg-color-default topbar-desktop-on header-top">
                        <div className="container-fluid">
                            <Row>
                                <Col sm={4} lg={4}>
                                    <div className="logo-wrapper text-center header-log-pc" >
                                        <Link to="/">
                                            <img className="img-fluid" src={logo} alt="logo" />
                                        </Link>
                                    </div>
                                </Col>
                                <Col sm={4} lg={4}>
                                    <div className="topbar-mobile-off header-search">
                                        <input className="input-search font-italic" placeholder="Search Products, Brands etc..." />
                                    </div>
                                </Col>
                                <Col sm={4} lg={2}>
                                    <div className="topbar-right text-right">
                                        <div className="topbar-link">
                                            <ul className="nav">
                                                <li className="topbar_item topbar_item_type-topbar_menu">
                                                    <div className="menu-top-bar-menu-container">
                                                        <ul className="top-menu  nav">
                                                            <li className="menu-item font-italic">
                                                                <Link to="#" className="btn-user-join" onClick={this.toggle} data-toggle="modal" data-target="#"> Login</Link>
                                                            </li>&nbsp;|&nbsp;
                                                            <li className="menu-item font-italic">
                                                                <Link to="#" className="btn-user-join" onClick={this.toggle} data-toggle="modal" data-target="#">Register</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4} lg={2}>
                                    <div className="topbar-right text-right header-cart-pc">
                                        <div className="topbar-link">
                                            <ul className="ciya-tools-actions nav" >
                                                <li className="ciya-tools-action ciya-tools-cart">
                                                    {
                                                        (this.ReadCartItems() == null || this.ReadCartItems().length === 0) ?
                                                            <Link className="cart-link btn-user-join" to="#" onClick={() => this.ShowCart()} >
                                                                <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" /></span>
                                                                <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                            </Link>

                                                            :

                                                            <Link className="cart-link btn-user-join" to="/ShopingCart" onClick={() => this.ShowCart()} >
                                                                <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" /></span>
                                                                <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                            </Link>

                                                    }


                                                    {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                                        <div className="cart-contents" id="DivCartContent">
                                                            <div className="widget ciyashop widget-shopping-cart">
                                                                <div className="widget-shopping-cart-content">
                                                                    <div className="pgs-product-list-widget-container has-scrollbar">
                                                                        <ul className="ciyashop-mini-cart cart-list">

                                                                            {this.ReadCartItems().map((CartItem, index) => (

                                                                                <li className="ciya-mini-cart-item"   >
                                                                                    <Link onClick={() => this.removeFromCart(index)} id={`Product_${CartItem.ProductID}`} className="remove remove_from_cart_button btn-user-join">×</Link>
                                                                                    <div className="media">
                                                                                        <Link to="#"><img width={60} height={76} src={require(`../../assets/images/${CartItem.ProductImage}`)} className="img-fluid" alt /></Link>
                                                                                        <div className="media-body">
                                                                                            <Link to="#" className="product-title btn-user-join">{CartItem.ProductName}</Link>
                                                                                            <span className="quantity">{CartItem.Qty} × <span className="woocs-special_price_code"><span className="ciya-Price-amount amount"><span className="ciya-Price-currencySymbol">&#8377;</span>{CartItem.Rate}</span></span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            ))}

                                                                        </ul>
                                                                    </div>
                                                                    <p className="ciyashop-mini-cart__total total"><strong>Subtotal:</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol">&#8377;</span> {this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)}</span></span></p>
                                                                    <p className="ciyashop-mini-cart__buttons buttons">
                                                                        <Link onClick={() => this.HideCart()} to="/ShopingCart" className="button wc-forward">View cart</Link>
                                                                        <Link onClick={() => this.HideCart()} to="/CheckOut" className="button checkout wc-forward">Checkout</Link>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        :
                                                        <div className="cart-contents" id="DivCartContent">
                                                            <div className="widget ciyashop widget-shopping-cart">
                                                                <div className="widget-shopping-cart-content">
                                                                    <p className="ciyashop-mini-cart__total total">
                                                                        <img src={require(`../../assets/images/empty-cart.png`)} className="img-fluid mr-3" />
                                                                        <strong>Your cart is currently empty.</strong>
                                                                        <span className="woocs_special_price_code">
                                                                            <span className="ciyashop-Price-amount amount">
                                                                                <span className="ciyashop-Price-currencySymbol"></span>
                                                                            </span>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </li>
                                                <li className="ciya-tools-action ciya-tools-wishlist">
                                                    <Link to="/wishlist" className="btn-user-join">
                                                        <i className="glyph-icon pgsicon-ecommerce-like" />
                                                        <span className="wishlist ciyashop-wishlist-count">
                                                            {this.ReadWishListItems() == null ? 0 : this.ReadWishListItems().length}
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-login modal-dialog-centered">
                                    <div class="div-modal" id="div-modal">
                                        <ModalBody>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="1">
                                                    <div className="modal-header-login text-center">
                                                        <h1 class="modal-login-txt">LOGIN</h1>
                                                        <p class="modal-login-txt-content font-italic">Get access to your Orders,<br />Wishlist and Recommendations</p>
                                                    </div>
                                                    <form>
                                                        <div class="form-group">
                                                            <input type="text" class=" form-input font-italic text-center" placeholder="Email/Phone Number"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input font-italic text-center" placeholder="Password"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="form-link-tag text-center">
                                                                <Link className="btn btn-sign" >LOGIN</Link>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="modal-footer-link text-center">
                                                        <p class="new-account font-italic">New to Qapkart?</p>
                                                        <Link to="#"
                                                            onClick={() => { this.logintoggle('2'); }} class="btn-signup font-italic"> SIGNUP </Link>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <div className="modal-header-login text-center">
                                                        <h1 class="modal-login-txt">SIGNUP</h1>
                                                        <p class="modal-login-txt-content font-italic">WITH QAPKART</p>
                                                        <div className="social-account">
                                                            <div class="row">
                                                                <div class="col-4">
                                                                    <p class="social-txt-sigin font-italic">Using:</p>
                                                                </div>
                                                                <div class="col-4">
                                                                    <Link to="#">
                                                                        <img src={require(`../../assets/images/image/Google+.png`)}></img>
                                                                    </Link>
                                                                </div>
                                                                <div class="col-4">
                                                                    <Link to="#">
                                                                        <img src={require(`../../assets/images/image/FB.png`)}></img>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="classical-txt-sigin text-center font-italic">or Be Classical</p>
                                                    </div>
                                                    <form>
                                                        <div class="form-group">
                                                            <input type="text" class=" form-input font-italic text-center" placeholder="Full Name"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class=" form-input font-italic text-center" placeholder="Mobile Number"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class=" form-input font-italic text-center" placeholder="Enter OTP"></input>
                                                        </div>
                                                        <div class="form-resend text-right">
                                                            <Link className="resend-link" >RECEND OTP</Link>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class=" form-input font-italic text-center" placeholder="Set Password"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class=" form-input font-italic text-center" placeholder="Confirm Password"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="form-link-tag text-center">
                                                                <Link className="btn btn-sign" >SIGNUP</Link>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer-link text-center">
                                                            <p class="new-account font-italic">Already Member?</p>
                                                            <Link to="#"
                                                                onClick={() => { this.logintoggle('1'); }} class="btn-signup font-italic"> LOGIN </Link>
                                                        </div>                                                        
                                                    </form>
                                                </TabPane>
                                            </TabContent>
                                        </ModalBody>
                                    </div>
                                </Modal>
                                <div className="col-12">
                                    <div className="mobile-menu" id="mobileMenu" />
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="header-main header-main-bg-color-default">
                        <div className="container-fluid">
                            <Row>
                                <Col lg={12}>
                                    <div className="row align-items-center justify-content-md-center">
                                        <Col xl={2} lg={2} className="col-6">
                                            <div className="logo-wrapper header-log">
                                                <Link to="/">
                                                    <img className="img-fluid" src={logo} alt="logo" />
                                                </Link>
                                            </div>
                                            <div className="clearfix" />
                                        </Col>
                                        <div className="col" id="mainMenu">
                                            <div className="header-nav header-nav-bg-color-default">
                                                <div className="header-nav-wrapper">
                                                    <Container>
                                                        <Row>
                                                            <div className="col-12">
                                                                <div className="primary-nav">
                                                                    <div className="primary-nav-wrapper">
                                                                        <nav className="mega-menu">
                                                                            <div class="menu-list-items">
                                                                                <Navbar light expand="md" class="front_menu" >
                                                                                    <NavbarToggler onClick={this.toggle} />
                                                                                    <Collapse isOpen={this.state.isOpen} navbar>
                                                                                        {navLinks.map((navLink, index) => (
                                                                                            <Nav className="ml-auto" navbar>
                                                                                                {(navLink.type && navLink.type === 'subMenu') ?
                                                                                                    <Fragment>
                                                                                                        <UncontrolledDropdown nav inNavbar onMouseEnter={() => this.OpenSubmenuOpen(`submenu_${index}`)} onMouseLeave={() => this.OpenSubmenuClose(`submenu_${index}`)}>
                                                                                                            <Link aria-haspopup="true" to={navLink.path} className="dropdown-toggle nav-link" aria-expanded="true"> {navLink.menu_title}</Link>
                                                                                                            <DropdownMenu right id={`submenu_${index}`}>

                                                                                                                {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                                                    <DropdownItem tag={Link} to={subNavLink.path}>{subNavLink.menu_title}</DropdownItem>
                                                                                                                ))}
                                                                                                            </DropdownMenu>
                                                                                                        </UncontrolledDropdown>

                                                                                                    </Fragment>
                                                                                                    :
                                                                                                    <Fragment>
                                                                                                        <NavItem>
                                                                                                            <NavLink href={navLink.path}>{navLink.menu_title}</NavLink>
                                                                                                        </NavItem>

                                                                                                    </Fragment>
                                                                                                }
                                                                                            </Nav>
                                                                                        ))}
                                                                                    </Collapse>
                                                                                </Navbar>
                                                                            </div>
                                                                        </nav>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </div>
                                        <Col xl={2} lg={2} className="col-6">
                                            <div className="header-nav-right-wrapper header-nav-cart">
                                                <div className="ciya-tools">
                                                    <div className="ciya-tools-wrapper">
                                                        <ul className="ciya-tools-actions">
                                                            <li className="ciya-tools-action ciya-tools-cart">
                                                                {
                                                                    (this.ReadCartItems() == null || this.ReadCartItems().length === 0) ?
                                                                        <Link className="cart-link btn-user-join" to="#" onClick={() => this.ShowCart()} >
                                                                            <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart header-icon" /></span>
                                                                            <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                        </Link>

                                                                        :

                                                                        <Link className="cart-link btn-user-join" to="/ShopingCart" onClick={() => this.ShowCart()} >
                                                                            <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart header-icon" /></span>
                                                                            <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                        </Link>

                                                                }


                                                                {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                                                    <div className="cart-contents" id="DivCartContent">
                                                                        <div className="widget ciyashop widget-shopping-cart">
                                                                            <div className="widget-shopping-cart-content">
                                                                                <div className="pgs-product-list-widget-container has-scrollbar">
                                                                                    <ul className="ciyashop-mini-cart cart-list">



                                                                                        {this.ReadCartItems().map((CartItem, index) => (

                                                                                            <li className="ciya-mini-cart-item"   >
                                                                                                <Link onClick={() => this.removeFromCart(index)} id={`Product_${CartItem.ProductID}`} className="remove remove_from_cart_button">×</Link>
                                                                                                <div className="media">
                                                                                                    <Link to="#"><img width={60} height={76} src={require(`../../assets/images/${CartItem.ProductImage}`)} className="img-fluid" alt /></Link>
                                                                                                    <div className="media-body">
                                                                                                        <Link to="#" className="product-title">{CartItem.ProductName}</Link>
                                                                                                        <span className="quantity">{CartItem.Qty} × <span className="woocs-special_price_code"><span className="ciya-Price-amount amount"><span className="ciya-Price-currencySymbol">&#8377;</span>{CartItem.Rate}</span></span></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        ))}

                                                                                    </ul>
                                                                                </div>
                                                                                <p className="ciyashop-mini-cart__total total"><strong>Subtotal:</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol">&#8377;</span> {this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)}</span></span></p>
                                                                                <p className="ciyashop-mini-cart__buttons buttons">
                                                                                    <Link onClick={() => this.HideCart()} to="/ShopingCart" className="button wc-forward">View cart</Link>
                                                                                    <Link onClick={() => this.HideCart()} to="/CheckOut" className="button checkout wc-forward">Checkout</Link>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    :
                                                                    <div className="cart-contents" id="DivCartContent">
                                                                        <div className="widget ciyashop widget-shopping-cart">
                                                                            <div className="widget-shopping-cart-content">
                                                                                <p className="ciyashop-mini-cart__total total">
                                                                                    <img src={require(`../../assets/images/empty-cart.png`)} className="img-fluid mr-3" />
                                                                                    <strong>Your cart is currently empty.</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol"></span> </span></span></p>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </li>
                                                            <li className="ciya-tools-action ciya-tools-wishlist">
                                                                <Link to="/wishlist" className="btn-user-join">
                                                                    <i className="glyph-icon pgsicon-ecommerce-like header-icon" />
                                                                    <span className="wishlist ciyashop-wishlist-count"> {this.ReadWishListItems() == null ? 0 : this.ReadWishListItems().length}
                                                                    </span>
                                                                </Link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Navbar color="faded" light >

                                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                                            <Collapse isOpen={!this.state.collapsed} navbar>
                                                <Nav className="ml-auto" navbar>
                                                    {navLinks.map((navLink, index) => (
                                                        <li className={`nav-item ${(this.state.classset === navLink.menu_title) ? 'show' : ''}`}>
                                                            {(navLink.type && navLink.type === 'subMenu') ?
                                                                <Fragment>
                                                                    <Link href="#" className="nav-link" onClick={() => this.onClickClassAdd(navLink.menu_title)}>{navLink.menu_title}</Link>
                                                                    <ul className={(this.state.classset === navLink.menu_title) ? 'showcollapsed' : 'submenu'}>
                                                                        {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                            <li className={`nav-item  ${(pageName === subNavLink.path) ? 'active' : ''}`} toggle={false}   >
                                                                                <Link className="nav-link" onClick={() => this.closeNavbar()} to={subNavLink.path}>{subNavLink.menu_title}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </Fragment>
                                                                :
                                                                <Fragment>
                                                                    <NavItem>
                                                                        <Link to={navLink.path} className="nav-admin-link" >{navLink.menu_title}</Link>
                                                                    </NavItem>

                                                                </Fragment>
                                                            }
                                                        </li>
                                                    ))}
                                                </Nav>
                                            </Collapse>
                                        </Navbar>
                                    </div>
                                </Col>

                            </Row>

                        </div>
                    </div>
                </div>

            </header>
        )
    }
};

export default Header;