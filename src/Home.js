import React, { Component } from 'react';
import './NavigationBar';
import NavigationBar from './NavigationBar';
import './Home.css';
import banner from './images/banner/Top-Banner-26June.jpg';
import BannerCarousel from './BannerCarousel';
import BestSellerSlider from './BestSellerSlider';
import pic1 from './images/banner/pic1.jpeg';
import pic2 from './images/banner/pic2.jpeg';
import pic3 from './images/banner/pic3.jpeg';

export default class Home extends Component {
    render() {
      return (  
        <div>
          <div className="container">
             <div ><NavigationBar/></div>
             <div className="content-top">
                <div className="banner">
                    <p><img src={banner} alt="banner" width="1360" height="70" /></p>
                </div>
                <div className="home-banner">
                   <BannerCarousel/>  
                </div>
             </div>
             <h2 id="text-shop">SHOP THE LOOKS</h2>
             <div className="shop-pic">
                <div className="row">
                  <div className="col-md-4 col-md-12"><img src={pic1} /></div>
                  <div className="col-md-4 col-md-12"><img src={pic2} /></div>
                  <div className="col-md-4 col-md-12"><img src={pic3} /></div>
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