import React, { Component } from 'react';

import './Home.css';
import BannerCarousel from './BannerCarousel';
import BestSellerSlider from './BestSellerSlider';

//images
import banner from './images/banner/Top-Banner-26June.jpg';
import pic1 from './images/banner/pic1.jpeg';
import pic2 from './images/banner/pic2.jpeg';
import pic3 from './images/banner/pic3.jpeg';

export default class Home extends Component {
    render() {
      return (  
        <div>
          <div className="container-body">
             <div className="content-top">
                <div className="banner">
                    <p><img src={banner} alt="banner" width="1360" height="70" /></p>
                </div>
             </div>
             
          </div>
             <div className="home-banner">
                   <BannerCarousel/>  
                </div>
                <div className="container-body  "> 
             <h2 id="text-shop">SHOP THE LOOKS</h2>
             <div className="shop-pic">
                <div className="row">
                  <div className="col-md-4 col-md-12"><img src={pic1} alt="one-set"/></div>
                  <div className="col-md-4 col-md-12"><img src={pic2} alt="dress"/></div>
                  <div className="col-md-4 col-md-12"><img src={pic3} alt="top"/></div>
                </div>
             </div>
             <h2 id="text-shop">BEST SELLER</h2>
             <h4 id="text-shop-small">Get yourself into our hottest picks</h4>
             <div className="best-seller">
                <BestSellerSlider/>
             </div>
          </div>
          </div>
        );
      }
    }