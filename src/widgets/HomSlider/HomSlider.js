/**
 * Home Slider
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './HomSlider.css';

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class HomSlider extends Component {

    render() {
        return (
            <Slider className="slider-01 slider-simple-arrow" {...settings}>
                <div key={1} className="slide-01-item">
                    <div className="slide-inner">
                        <div className="slide-image">
                            <img src={require(`../../assets/images/image/Banner-1.png`)} alt="slide-1" />
                        </div>
                        <div className="slide-content">
                            <div class="slider-text">
                                <div class="row">
                                    <div class="col-xl-6 col-md-8">
                                        <div class="slide-left">
                                            <div class="slide-title">
                                                <div class="row">
                                                    <div class="col-2 nav-logo">
                                                        <img src={require(`../../assets/images/image/nav-logo.png`)} />
                                                    </div>
                                                </div>
                                                <h1 class="slider-header-txt">THE NEXT</h1>
                                                <h1 class="slider-header-txt">BEST THING</h1>
                                                <h2 class="slider-subtxt"><b class="slider-sub-txt-1">SALE START FROM</b><b class="slider-sub-txt-2"> TOMORROW</b></h2>
                                            </div>
                                            <Link class="btn slider-button" to="/shop">ADD TO WISHLIST</Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-4 text-right d-none d-md-block">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div key={2} className="slide-01-item">
                    <div className="slide-inner">
                        <div className="slide-image">
                            <img src={require(`../../assets/images/image/Banner-1.png`)} alt="slide-1" />
                        </div>
                        <div className="slide-content">
                            <div class="slider-text">
                                <div class="row">
                                    <div class="col-xl-6 col-md-8">
                                        <div class="slide-left">
                                            <div class="slide-title">
                                                <div class="row">
                                                    <div class="col-2 nav-logo">
                                                        <img src={require(`../../assets/images/image/nav-logo.png`)} />
                                                    </div>
                                                </div>
                                                <h1 class="slider-header-txt">THE NEXT</h1>
                                                <h1 class="slider-header-txt">BEST THING</h1>
                                                <h2 class="slider-subtxt"><b class="slider-sub-txt-1">SALE START FROM</b><b class="slider-sub-txt-2"> TOMORROW</b></h2>
                                            </div>
                                            <Link class="btn slider-button" to="/shop">ADD TO WISHLIST</Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-4 text-right d-none d-md-block">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default HomSlider;
