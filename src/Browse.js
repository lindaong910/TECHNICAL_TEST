import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './NavigationBar';
import NavigationBar from './NavigationBar';
import ImageCard from './ImageCard';
import './Browse.css';

//page 1
import banner from './images/banner/bannerxtra_(2)_1180.jpg';
import img1 from './images/browse/Boxy_Cropped_T_-_Shirt_(13)1.jpg';
import img1hover from './images/browse/Boxy_Cropped_T_-_Shirt_(18)1.jpg';
import img2 from './images/browse/Broderie_Camisole_Crop_Top_(17).jpg';
import img2hover from './images/browse/Broderie_Camisole_Crop_Top_(21).jpg';
import img3 from './images/browse/Checked_Bardot_Playsuit_(7).jpg';
import img3hover from './images/browse/Checked_Bardot_Playsuit_(12)1.jpg';
import img4 from './images/browse/Crochet_Overlay_Halter_Midi_Dress_(6)1.jpg';
import img4hover from './images/browse/Crochet_Overlay_Halter_Midi_Dress_(11)1.jpg';
import img5 from './images/browse/Daisy_Wrap_Playsuit_(7).jpg';
import img5hover from './images/browse/Daisy_Wrap_Playsuit_(12)1.jpg';
import img6 from './images/browse/Dress_With_Eyelet_Details_(8)1.jpg';
import img6hover from './images/browse/Dress_With_Eyelet_Details_(13)1.jpg';
import img7 from './images/browse/DSCF9588.jpg';
import img7hover from './images/browse/DSCF9592.jpg';
import img8 from './images/browse/Floral_Horn_Top_(16).jpg';
import img8hover from './images/browse/Floral_Horn_Top_(20)1.jpg';
import img9 from './images/browse/Floral_Lace_Up_Bell_Sleeve_Playsuit_(16)1.jpg';
import img9hover from './images/browse/Floral_Lace_Up_Bell_Sleeve_Playsuit_(21).jpg';
import img10 from './images/browse/Floral_Tie_-_Over_Skater_Dress_(3).jpg';
import img10hover from './images/browse/Floral_Tie_-_Over_Skater_Dress_(9).jpg';
import img11 from './images/browse/Floral_Wrap_Frill_Playsuit_(7).jpg';
import img11hover from './images/browse/Floral_Wrap_Frill_Playsuit_(14)4.jpg';
import img12 from './images/browse/Floral_Wrap_Frill_Playsuit_(14).jpg';
import img12hover from './images/browse/Floral_Wrap_Frill_Playsuit_(19)1.jpg';

//page 2
import img13 from './images/browse/Floral_Wrap_Jumpsuit_(11).jpg';
import img13hover from './images/browse/Floral_Wrap_Jumpsuit_(17)1.jpg';
import img14 from './images/browse/Floral_Wrap_Top_(1).jpg';
import img14hover from './images/browse/Floral_Wrap_Top_(6)1.jpg';
import img15 from './images/browse/FSP-1800.jpg';
import img15hover from './images/browse/FSP-1809.jpg';
import img16 from './images/browse/FSP-7089.jpg';
import img16hover from './images/browse/FSP-7097.jpg';
import img17 from './images/browse/FSP-16961.jpg';
import img17hover from './images/browse/FSP-17051.jpg';
import img18 from './images/browse/FSP-38621.jpg';
import img18hover from './images/browse/FSP-38751.jpg';
import img19 from './images/browse/FSP-4085.jpg';
import img19hover from './images/browse/FSP-40911.jpg';
import img20 from './images/browse/FSP-5188.jpg';
import img20hover from './images/browse/FSP-52021.jpg';
import img21 from './images/browse/Stripe_Cold_Shoulder_Playsuit_(15).jpg';
import img21hover from './images/browse/FSP-5662.jpg';
import img22 from './images/browse/FSP-5802.jpg';
import img22hover from './images/browse/Printed_Bell_Sleeve_Outer_(6)1.jpg';
import img23 from './images/browse/FSP-6398.jpg';
import img23hover from './images/browse/FSP-64041.jpg';
import img24 from './images/browse/FSP-6545.jpg';
import img24hover from './images/browse/FSP-65521.jpg';

//page 3
import img25 from './images/browse/FSP-68901.jpg';
import img25hover from './images/browse/FSP-68971.jpg';
import img26 from './images/browse/Gingham_Blouse_With_Ruffles_(9).jpg';
import img26hover from './images/browse/Gingham_Blouse_With_Ruffles_(12)1.jpg';
import img27 from './images/browse/Hemp_Suit_Set_(1)3.jpg';
import img27hover from './images/browse/Hemp_Suit_Set_(5)3.jpg';
import img28 from './images/browse/Knit_Top_With_Contrasting_Piping_(5).jpg';
import img28hover from './images/browse/Knit_Top_With_Contrasting_Piping_(7)1.jpg';
import img29 from './images/browse/Leaves_Print_Playsuit_(12).jpg';
import img29hover from './images/browse/Leaves_Print_Playsuit_(16)1.jpg';
import img30 from './images/browse/Loose_Fit_Hemp_Suit_(12)1.jpg';
import img30hover from './images/browse/Loose_Fit_Hemp_Suit_(14)1.jpg';
import img31 from './images/browse/Mila_Knit_Top_And_Pant_(15)1.jpg';
import img31hover from './images/browse/Mila_Knit_Top_And_Pant_(18)1.jpg';
import img32 from './images/browse/Minimalist_Tee_(25).jpg';
import img32hover from './images/browse/Minimalist_Tee_(30).jpg';
import img33 from './images/browse/Pleated_Camisole_Top_(1).jpg';
import img33hover from './images/browse/Pleated_Camisole_Top_(6)1.jpg';
import img34 from './images/browse/Polka_Dot_Playsuit_(19).jpg';
import img34hover from './images/browse/Polka_Dot_Playsuit_(24)1.jpg';
import img35 from './images/browse/Polka_Dot_Print_Dress_(7).jpg';
import img35hover from './images/browse/Polka_Dot_Print_Dress_(10).jpg';
import img36 from './images/browse/Polkadot_Linen_Top_(11)1.jpg';
import img36hover from './images/browse/Polkadot_Linen_Top_(15)1.jpg';

//page 4
import img37 from './images/browse/Printed_Crop_Shirt_(1)_-_Copy1.jpg';
import img37hover from './images/browse/Printed_Crop_Shirt_(7)1.jpg';
import img38 from './images/browse/Uneven_Knit_Top_(8)1.jpg';
import img38hover from './images/browse/Uneven_Knit_Top_(13)1.jpg';
import img39 from './images/browse/Ruffle_Wrap_Dress_(1)1.jpg';
import img39hover from './images/browse/Ruffle_Wrap_Dress_(6)1.jpg';
import img40 from './images/browse/Smocked_Checked_Blouse_(11).jpg';
import img40hover from './images/browse/Smocked_Checked_Blouse_(14)1.jpg';
import img41 from './images/browse/Stripe_Cardigan_Dress_With_Belt_(18).jpg';
import img41hover from './images/browse/Stripe_Cardigan_Dress_With_Belt_(22).jpg';
import img42 from './images/browse/Stripe_Cold_Shoulder_Jumpsuit_(19).jpg';
import img42hover from './images/browse/Stripe_Cold_Shoulder_Jumpsuit_(24)1.jpg';
import img43 from './images/browse/Stripe_Slouch_Jumpsuit_(14).jpg';
import img43hover from './images/browse/Stripe_Slouch_Jumpsuit_(18).jpg';
import img44 from './images/browse/Striped_Asymmetric_Wrap_Dress_(1)1.jpg';
import img44hover from './images/browse/Striped_Asymmetric_Wrap_Dress_(3)1.jpg';
import img45 from './images/browse/Summer_Camisole_Top_(1).jpg';
import img45hover from './images/browse/Summer_Camisole_Top_(8)1.jpg';
import img46 from './images/browse/Tropical_Flute_Sleeve_Bardot_Playsuit_(17)1.jpg';
import img46hover from './images/browse/Tropical_Flute_Sleeve_Bardot_Playsuit_(22)1.jpg';
import img47 from './images/browse/Tuxedo_Wide_-_Leg_Jumpsuit_(1)1.jpg';
import img47hover from './images/browse/Tuxedo_Wide_-_Leg_Jumpsuit_(4)1.jpg';
import img48 from './images/browse/Your_Basic_Camisole_Top_(55)1.jpg';
import img48hover from './images/browse/Your_Basic_Camisole_Top_(58)1.jpg';

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pages: [
        [
          {
            id: img1,
            idHover: img1hover,
            name: 'Boxy Cropped T-Shirt',
            price: 'IDR 175.000',
          },
          {
            id: img2,
            idHover: img2hover,
            name: 'Broderie Camisole Crop Top',
            price: 'IDR 215.000',
          },
          {
            id: img3,
            idHover: img3hover,
            name: 'Checked Bardot Playsuit',
            price: 'IDR 270.000',
          },
          {
            id: img4,
            idHover: img4hover,
            name: 'Crochet Sun Dress',
            price: 'IDR 325.000',
          },
          {
            id: img5,
            idHover: img5hover,
            name: 'Daisy Wrap Playsuit',
            price: 'IDR 315.000',
          },
          {
            id: img6,
            idHover: img6hover,
            name: 'Dress With Eyelet Details',
            price: 'IDR 350.000',
          },
          {
            id: img7,
            idHover: img7hover,
            name: 'Trapeze Dress',
            price: 'IDR 275.000',
          },
          {
            id: img8,
            idHover: img8hover,
            name: 'Floral Horn Top',
            price: 'IDR 225.000',
          },
          {
            id: img9,
            idHover: img9hover,
            name: 'Floral Lace Up Bell Sleeve Playsuit',
            price: 'IDR 325.000',
          },
          {
            id: img10,
            idHover: img10hover,
            name: 'Floral Tie Over Skate Dress',
            price: 'IDR 315.000',
          },
          {
            id: img11,
            idHover: img11hover,
            name: 'Floral Wrap Frill Playsuit',
            price: 'IDR 295.000',
          },
          {
            id: img12,
            idHover: img12hover,
            name: 'Petite Frill Playsuit',
            price: 'IDR 275.000',
          },
        ],
        [
          {
            id: img13,
            idHover: img13hover,
            name: 'Floral Wrap Jumpsuit',
            price: 'IDR 315.000',
          },
          {
            id: img14,
            idHover: img14hover,
            name: 'Floral Wrap Top',
            price: 'IDR 215.000',
          },
          {
            id: img15,
            idHover: img15hover,
            name: 'Basic Dress',
            price: 'IDR 250.000',
          },
          {
            id: img16,
            idHover: img16hover,
            name: 'Midi Stripe Dress With Button',
            price: 'IDR 350.000',
          },
          {
            id: img17,
            idHover: img17hover,
            name: 'Striped Dress With Crossover Detail',
            price: 'IDR 325.000',
          },
          {
            id: img18,
            idHover: img18hover,
            name: 'Cold Shoulder Playsuit',
            price: 'IDR 285.000',
          },
          {
            id: img19,
            idHover: img19hover,
            name: 'Satin Polkadot Blouse',
            price: 'IDR 225.000',
          },
          {
            id: img20,
            idHover: img20hover,
            name: 'Crochet Overlay Halter Midi Dress',
            price: 'IDR 325.000',
          },
          {
            id: img21,
            idHover: img21hover,
            name: 'Stripe Cold Shoulder Playsuit',
            price: 'IDR 315.000',
          },
          {
            id: img22,
            idHover: img22hover,
            name: 'Printed Bell Sleeve Outer',
            price: 'IDR 255.000',
          },
          {
            id: img23,
            idHover: img23hover,
            name: 'Printed Draped Top',
            price: 'IDR 225.000',
          },
          {
            id: img24,
            idHover: img24hover,
            name: 'Floral Wrap Front Playsuit',
            price: 'IDR 275.000',
          },
        ],
        [
          {
            id: img25,
            idHover: img25hover,
            name: 'Floral Cut Out Playsuit',
            price: 'IDR 285.000',
          },
          {
            id: img26,
            idHover: img26hover,
            name: 'Gingham Blouse With Ruffles',
            price: 'IDR 230.000',
          },
          {
            id: img27,
            idHover: img27hover,
            name: 'Hemp Suit Set',
            price: 'IDR 380.000',
          },
          {
            id: img28,
            idHover: img28hover,
            name: 'Knit Top With Constrasting Piping',
            price: 'IDR 250.000',
          },
          {
            id: img29,
            idHover: img29hover,
            name: 'Leaves Print Playsuit',
            price: 'IDR 275.000',
          },
          {
            id: img30,
            idHover: img30hover,
            name: 'Loose Fit Hemp Suit',
            price: 'IDR 385.000',
          },
          {
            id: img31,
            idHover: img31hover,
            name: 'Mila Knit Top And Pant',
            price: 'IDR 395.000',
          },
          {
            id: img32,
            idHover: img32hover,
            name: 'Minimalist Tree',
            price: 'IDR 190.000',
          },
          {
            id: img33,
            idHover: img33hover,
            name: 'Pleated Camisole Top',
            price: 'IDR 245.000',
          },
          {
            id: img34,
            idHover: img34hover,
            name: 'Polkadot Playsuit',
            price: 'IDR 325.000',
          },
          {
            id: img35,
            idHover: img35hover,
            name: 'Polkadot Print Dress',
            price: 'IDR 305.000',
          },
          {
            id: img36,
            idHover: img36hover,
            name: 'Polkadot Linen Top',
            price: 'IDR 230.000',
          },
        ],
        [
          {
            id: img37,
            idHover: img37hover,
            name: 'Printed Crop Shirt',
            price: 'IDR 210.000',
          },
          {
            id: img38,
            idHover: img38hover,
            name: 'Uneven Knit Top',
            price: 'IDR 265.000',
          },
          {
            id: img39,
            idHover: img39hover,
            name: 'Ruffle Wrap Dress',
            price: 'IDR 315.000',
          },
          {
            id: img40,
            idHover: img40hover,
            name: 'Smoked Checked Blouse',
            price: 'IDR 225.000',
          },
          {
            id: img41,
            idHover: img41hover,
            name: 'Stripe Cardigan Dress With Belt',
            price: 'IDR 295.000',
          },
          {
            id: img42,
            idHover: img42hover,
            name: 'Stripe Cold Shoulder Jumpsuit',
            price: 'IDR 305.000',
          },
          {
            id: img43,
            idHover: img43hover,
            name: 'Stripe Slouch Jumpsuit',
            price: 'IDR 295.000',
          },
          {
            id: img44,
            idHover: img44hover,
            name: 'Striped Asymmetric Wrap Dress',
            price: 'IDR 295.000',
          },
          {
            id: img45,
            idHover: img45hover,
            name: 'Summer Camisole Top',
            price: 'IDR 190.000',
          },
          {
            id: img46,
            idHover: img46hover,
            name: 'Tropical Flute Sleeve Bardot Playsuit',
            price: 'IDR 265.000',
          },
          {
            id: img47,
            idHover: img47hover,
            name: 'Tuxedo Wide Leg Jumpsuit',
            price: 'IDR 305.000',
          },
          {
            id: img48,
            idHover: img48hover,
            name: 'Your Basic Camisole Top',
            price: 'IDR 165.000',
          },
        ],
      ],
    };
  }

  countItem = () => {
    let count = 0;
    for (let i = 0; i < this.state.pages.length; i++) {
      for (let y = 0; y < this.state.pages[i].length; y++) {
        count++;
      }
    }
    return count;
  };

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({
      activePage: pageNumber,
    });
  };

  render() {
    console.log(this.state.pages);
    const currentPageObj = this.state.pages[this.state.activePage - 1];
    return (
      <div>
        <div className="container">
          <div>
            <NavigationBar />
          </div>
          <div className="banner">
            <p>
              <img src={banner} alt="banner" width="1360" height="70" />
            </p>
          </div>
          <h2 id="text-shop">COLLECTION</h2>
          <div className="container">
            {currentPageObj.map(item => {
              return (
                <div>
                  <div className="col-md-4 col-md-6">
                    <ImageCard img={item.id} imgHover={item.idHover} />
                    <div id="name">{item.name}</div>
                    <div id="price"><b>{item.price}</b></div>
                  </div>
                </div>
              );
            })}
             <div className="pagination">
            <div>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.pages[0].length}
                totalItemsCount={this.countItem()}
                pageRangeDisplayed={3}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
         
          </div>
        </div>
      </div>
    );
  }
}
