import React, { Component } from 'react';
import './NavigationBar';
import NavigationBar from './NavigationBar';
import './Browse.css';
import banner from './images/banner/bannerxtra_(2)_1180.jpg';
import pic1 from './images/banner/pic1.jpeg';
import pic2 from './images/banner/pic2.jpeg';
import pic3 from './images/banner/pic3.jpeg';
import BrowsePagination from './BrowsePagination';

export default class Browse extends Component {
    render() {
      return (  
        <div>
          <div className="container">
             <div ><NavigationBar/></div>
            <div className="banner">
                <p><img src={banner} alt="banner" width="1360" height="70" /></p>
            </div>
             <h2 id="text-shop">COLLECTION</h2>
             <div className="shop-pic">
                <div className="row">
                  <div className="col-md-4 col-md-6"><img src={pic1} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic2} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic3} /></div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-md-6"><img src={pic1} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic2} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic3} /></div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-md-6"><img src={pic1} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic2} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic3} /></div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-md-6"><img src={pic1} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic2} /></div>
                  <div className="col-md-4 col-md-6"><img src={pic3} /></div>
                </div>
             </div>
             <div className="pagination">
                <BrowsePagination/>
             </div>
            
          </div>
          </div>
        );
      }
    }