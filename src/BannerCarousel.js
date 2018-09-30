import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './images/banner/slide1.jpg';
import img2 from './images/banner/slide2.jpg';
import img3 from './images/banner/slide3.jpg';

export default class BannerCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={img1}/>
          </div>
          <div>
          <img src={img2}/>
          </div>
          <div>
          <img src={img3}/>
          </div>
        </Slider>
      </div>
    );
  }
}