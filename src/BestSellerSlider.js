import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import best1 from './images/browse/Gingham_Blouse_With_Ruffles_(10).jpg';
import best2 from './images/browse/Stripe_Cold_Shoulder_Jumpsuit_(19).jpg';
import best3 from './images/browse/Tropical_Flute_Sleeve_Bardot_Playsuit_(17)1.jpg';
import best4 from './images/browse/Floral_Wrap_Frill_Playsuit_(10).jpg';
import best5 from './images/browse/Daisy_Wrap_Playsuit_(7).jpg';
import best6 from './images/browse/Checked_Bardot_Playsuit_(7).jpg';
import best7 from './images/browse/Printed_Crop_Shirt_(5).jpg';
import best8 from './images/browse/Floral_Horn_Top_(16).jpg';
import best9 from './images/browse/Your_Basic_Camisole_Top_(55)1.jpg';
import best10 from './images/browse/FSP-58111.jpg';
import best11 from './images/browse/Gingham_Blouse_With_Ruffles_(12)1.jpg';
import best12 from './images/browse/Stripe_Cold_Shoulder_Jumpsuit_(24)1.jpg';
import best13 from './images/browse/Tropical_Flute_Sleeve_Bardot_Playsuit_(22)1.jpg';
import best14 from './images/browse/Floral_Wrap_Frill_Playsuit_(14)4.jpg';
import best15 from './images/browse/Daisy_Wrap_Playsuit_(12)1.jpg';
import best16 from './images/browse/Checked_Bardot_Playsuit_(12)1.jpg';
import best17 from './images/browse/Printed_Crop_Shirt_(7)1.jpg';
import best18 from './images/browse/Floral_Horn_Top_(20)1.jpg';
import best19 from './images/browse/Your_Basic_Camisole_Top_(58)1.jpg';
import best20 from './images/browse/Printed_Bell_Sleeve_Outer_(6)1.jpg';


export default class BestSellerSlider extends Component {
  
  
  constructor(props){
    super(props);
    const listOfImg = [
      {id:best1,name:'Gingham Blouse With Ruffles',price:'IDR 225.000'},
      {id:best2,name:'Stripe Cold Shoulder Jumpsuit',price:'IDR 355.000'},
      {id:best3,name:'Tropical Flute Sleeve Bardot Playsuit',price:'IDR 300.000'},
      {id:best4,name:'Floral Wrap Frill Playsuit',price:'IDR 325.000'},
      {id:best5,name:'Daisy Wrap Playsuit',price:'IDR 315.000'},
      {id:best6,name:'Checked Bardot Playsuit',price:'IDR 335.000'},
      {id:best7,name:'Printed Crop Shirt',price:'IDR 215.000'},
      {id:best8,name:'Floral Horn Top',price:'IDR 275.000'},
      {id:best9,name:'Your Basic Camisole Top',price:'IDR 195.000'},
      {id:best10,name:'Printed Bell Sleeve Outer',price:'IDR 275.000'},
    ];
    
    this.state = {listOfImg};
    this.onMouseOver = this.onMouseOver.bind(this); 
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(){    
     const listOfImgHover = [
      {id:best11,name:'Gingham Blouse With Ruffles',price:'IDR 225.000'},
      {id:best12,name:'Stripe Cold Shoulder Jumpsuit',price:'IDR 355.000'},
      {id:best13,name:'Tropical Flute Sleeve Bardot Playsuit',price:'IDR 300.000'},
      {id:best14,name:'Floral Wrap Frill Playsuit',price:'IDR 325.000'},
      {id:best15,name:'Daisy Wrap Playsuit',price:'IDR 315.000'},
      {id:best16,name:'Checked Bardot Playsuit',price:'IDR 335.000'},
      {id:best17,name:'Printed Crop Shirt',price:'IDR 215.000'},
      {id:best18,name:'Floral Horn Top',price:'IDR 275.000'},
      {id:best19,name:'Your Basic Camisole Top',price:'IDR 195.000'},
      {id:best20,name:'Printed Bell Sleeve Outer',price:'IDR 275.000'},
    ];
    
    this.setState({listOfImg:listOfImgHover});
  }


  onMouseOut(){
    const listOfImg = [
      {id:best1,name:'Gingham Blouse With Ruffles',price:'IDR 225.000'},
      {id:best2,name:'Stripe Cold Shoulder Jumpsuit',price:'IDR 355.000'},
      {id:best3,name:'Tropical Flute Sleeve Bardot Playsuit',price:'IDR 300.000'},
      {id:best4,name:'Floral Wrap Frill Playsuit',price:'IDR 325.000'},
      {id:best5,name:'Daisy Wrap Playsuit',price:'IDR 315.000'},
      {id:best6,name:'Checked Bardot Playsuit',price:'IDR 335.000'},
      {id:best7,name:'Printed Crop Shirt',price:'IDR 215.000'},
      {id:best8,name:'Floral Horn Top',price:'IDR 275.000'},
      {id:best9,name:'Your Basic Camisole Top',price:'IDR 195.000'},
      {id:best10,name:'Printed Bell Sleeve Outer',price:'IDR 275.000'},
    ];
    this.setState({listOfImg: listOfImg});
  }
  render() {
    const settings = {
        dots : true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
      <div>
        <Slider {...settings}>
            {this.state.listOfImg.map(item =>{return(
              <div>
                <img src={item.id}
                    onMouseOver={this.onMouseOver.bind(this)} 
                    onMouseOut={this.onMouseOut.bind(this)}/>
                <h5 id="name">{item.name}</h5>
                <h5 id="price"><b>{item.price}</b></h5> 
              </div>);})
            }
        </Slider>
      </div>
    );
  }
}