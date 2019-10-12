import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import './footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.Checkscroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.Checkscroll);
    }

    Checkscroll() {

        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;

        if (scrollTop > 350) {
            if (document.getElementById("back-to-top") != null) {
                document.getElementById("back-to-top").setAttribute("style", "display:block");
            }
        }
        else {

            if (document.getElementById("back-to-top") != null) {
                document.getElementById("back-to-top").setAttribute("style", "display:none");
            }
        }

    }
    ClicktoTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
    render() {
        let backtotop = { display: 'none' }
        return (
            <div>
                <footer className="site-footer">
                    <div className="footer-wrapper">
                        <div className="footer-widgets-wrapper">
                            <div className="footer">
                                <div className="footer-container">
                                    <Row>
                                        <div className="col-lg-3 col-md-6 footer-align-left">
                                            <div className="logo-wrapper widget">
                                                <p><Link to="#">
                                                    <img className="img-fluid" src={require(`../../assets/images/image/Logo-Footer.png`)} alt="logo" />
                                                </Link></p>
                                            </div>
                                            <div className="text-content">
                                                <p className="mb-3 mt-4 footer-content-left-txt font-italic">
                                                    <span>
                                                        <img src={require(`../../assets/images/image/Money-icon-01.png`)} />
                                                    </span>&nbsp;&nbsp;
                                                    Money Back Quarantee
                                                </p>
                                                <p className="mb-3 mt-4 footer-content-left-txt font-italic">
                                                    <span>
                                                        <img src={require(`../../assets/images/image/Easy-Return-01.png`)} />
                                                    </span>&nbsp;&nbsp;
                                                    Easy Return
                                                </p>
                                                <p className="mb-3 mt-4 footer-content-left-txt font-italic">
                                                    <span>
                                                        <img src={require(`../../assets/images/image/24x7-Support-icon-01.png`)} />
                                                    </span>&nbsp;&nbsp;
                                                    24/7 Support
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6 footer-align-left">
                                            <div className="footer-nav-menu widget">
                                                <p className="footer-text-title title font-italic">QUICK LINKS</p>
                                                <div className="menu-useful-links-container">
                                                    <p className="menu-item font-italic"><Link to="/aboutus" className="footer-link">About Us</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/shop" className="footer-link">Stories</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/shop" className="footer-link">Career</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/Contactus" className="footer-link">Contact Us</Link></p>
                                                    <p className="menu-item font-italic"><Link to="#" className="footer-link">Sell on Qapkart</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6 footer-align-left">
                                            <div className="footer-nav-menu widget mt-4 mt-lg-0">
                                                <p className="footer-text-title title font-italic">HELP</p>
                                                <div className="menu-useful-links-container">
                                                    <p className="menu-item font-italic"><Link to="/aboutus" className="footer-link">FAQ</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/shop" className="footer-link">Payments</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/shop" className="footer-link">Shipping</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/Contactus" className="footer-link">Cancellation and Returns</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6 footer-align-left">
                                            <div className="footer-nav-menu widget mt-4 mt-lg-0">
                                                <p className="footer-text-title title font-italic">TERMS</p>
                                                <div className="menu-useful-links-container">
                                                    <p className="menu-item font-italic"><Link to="/aboutus" className="footer-link">Return Policy</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/shop" className="footer-link">Terms of Use</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/shop" className="footer-link">Security</Link></p>
                                                    <p className="menu-item font-italic"><Link to="/Contactus" className="footer-link">Privacy</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6 footer-align-left">
                                            <div className="footer-nav-menu widget mt-4 mt-lg-0">
                                                <p className="footer-text-title title font-italic">MAIL US</p>
                                                <div className="menu-useful-links-container">
                                                    <p className="menu-item font-italic">123, Streetname, Address Line1, Address Line 2,<br /> City - 095400</p>
                                                </div>
                                                <p className="footer-text-title title font-italic">FOLLOW US</p>
                                                <p className="mb-3 mt-4 contact-support">
                                                    <span className="follow-span">
                                                        <Link to="#">
                                                            <img src={require(`../../assets/images/image/FB.png`)} />
                                                        </Link>
                                                    </span>
                                                    <span className="follow-span">
                                                        <Link to="#">
                                                            <img src={require(`../../assets/images/image/Twitter.png`)} />
                                                        </Link>
                                                    </span>
                                                    <span className="follow-span">
                                                        <Link to="#">
                                                            <img src={require(`../../assets/images/image/Instagram.png`)} />
                                                        </Link>
                                                    </span>
                                                    <span className="follow-span">
                                                        <Link to="#">
                                                            <img src={require(`../../assets/images/image/Google+.png`)} />
                                                        </Link>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bound">
                            <hr className="footer-hr" />
                        </div>
                        <div className="site-info">
                            <div className="footer-widget">
                                <div className="text-center">
                                    <p class="footer-txt font-italic"> <Link to="#" className="footer-link">Qapkart.com</Link>, {(new Date().getFullYear())} All Rights Reserved.</p>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Back to Top */}
                <div id="back-to-top" style={backtotop} onClick={this.ClicktoTop}>
                    <Link class="top arrow">
                        <i class="fa fa-angle-up"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer;