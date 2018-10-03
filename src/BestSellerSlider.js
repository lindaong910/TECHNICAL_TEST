import React, { Component } from "react";
import Slider from "react-slick";
import ImageCard from './ImageCard';

import { Modal, Button} from 'react-bootstrap';

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
      {id:best1,idHover: best11,name:'Gingham Blouse With Ruffles',price:'IDR 225.000'},
      {id:best2,idHover: best12,name:'Stripe Cold Shoulder Jumpsuit',price:'IDR 355.000'},
      {id:best3,idHover: best13,name:'Tropical Flute Sleeve Bardot Playsuit',price:'IDR 300.000'},
      {id:best4,idHover: best14,name:'Floral Wrap Frill Playsuit',price:'IDR 325.000'},
      {id:best5,idHover: best15,name:'Daisy Wrap Playsuit',price:'IDR 315.000'},
      {id:best6,idHover: best16,name:'Checked Bardot Playsuit',price:'IDR 335.000'},
      {id:best7,idHover: best17,name:'Printed Crop Shirt',price:'IDR 215.000'},
      {id:best8,idHover: best18,name:'Floral Horn Top',price:'IDR 275.000'},
      {id:best9,idHover: best19,name:'Your Basic Camisole Top',price:'IDR 195.000'},
      {id:best10,idHover: best20,name:'Printed Bell Sleeve Outer',price:'IDR 275.000'},
    ];
    
    this.state = {listOfImg,  isShowingModal: false};
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
                {<ImageCard img={item.id} imgHover={item.idHover} onClick={this.handleClick} />
                /*<Button bsStyle="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>
                  <Modal
                  {...this.props}
                  show={this.state.show}
                  onHide={this.handleHide}
                  dialogClassName="custom-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">
                      Modal heading
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Wrapped Text</h4>
                    <p>
                      Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                      unde commodi aspernatur enim, consectetur. Cumque deleniti
                      temporibus ipsam atque a dolores quisquam quisquam adipisci
                      possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                      quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                      Mollitia reiciendis porro quo magni incidunt dolore amet atque
                      facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum
                      dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis
                      laudantium quibusdam quidem corporis architecto veritatis. Ex
                      facilis minima beatae sunt perspiciatis placeat. Quasi corporis
                      odio eaque voluptatibus ratione magnam nulla? Amet cum maiores
                      consequuntur totam dicta! Inventore adipisicing vel vero odio modi
                      doloremque? Vitae porro impedit ea minima laboriosam quisquam
                      neque. Perspiciatis omnis obcaecati consequatur sunt deleniti
                      similique facilis sequi. Ipsum harum vitae modi reiciendis
                      officiis. Quas laudantium laudantium modi corporis nihil provident
                      consectetur omnis, natus nulla distinctio illum corporis. Sit ex
                      earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum
                      illum architecto aspernatur perspiciatis error fuga illum, tempora
                      harum earum, a dolores. Animi facilis inventore harum dolore
                      accusamus fuga provident molestiae eum! Odit dicta error dolorem
                      sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum
                      saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat
                      officia culpa sint! Beatae voluptates voluptatem excepturi
                      molestiae alias in tenetur beatae placeat architecto. Sit possimus
                      rerum fugiat sapiente aspernatur. Necessitatibus tempora animi
                      dicta perspiciatis tempora a velit in! Doloribus perspiciatis
                      doloribus suscipit nam earum. Deleniti veritatis eaque totam
                      assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus
                      eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur
                      alias ipsum repudiandae! Quia omnis quisquam dignissimos a
                      mollitia. Suscipit aspernatur eum maiores repellendus ipsum
                      doloribus alias voluptatum consequatur. Consectetur quibusdam
                      veniam quas tenetur necessitatibus repudiandae? Rem optio vel
                      alias neque optio sapiente quidem similique reiciendis tempore.
                      Illum accusamus officia cum enim minima eligendi consectetur nemo
                      veritatis nam nisi! Adipisicing nobis perspiciatis dolorum
                      adipisci soluta architecto doloremque voluptatibus omnis debitis
                      quas repellendus. Consequuntur assumenda illum commodi mollitia
                      asperiores? Quis aspernatur consequatur modi veritatis aliquid at?
                      Atque vel iure quos. Amet provident voluptatem amet aliquam
                      deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis
                      neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum
                      sed atque molestias debitis omnis! Sit sint repellendus deleniti
                      officiis distinctio. Impedit vel quos harum doloribus corporis.
                      Laborum ullam nemo quaerat reiciendis recusandae minima dicta
                      molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.
                      Amet exercitationem quasi velit inventore neque doloremque!
                      Consequatur neque dolorem vel impedit sunt voluptate. Amet quo
                      amet magni exercitationem libero recusandae possimus pariatur.
                      Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur
                      sit eligendi neque sunt soluta laudantium natus qui aperiam
                      quisquam consectetur consequatur sit sint a unde et. At voluptas
                      ut officiis esse totam quasi dolorem! Hic deserunt doloribus
                      repudiandae! Lorem quod ab nostrum asperiores aliquam ab id
                      consequatur, expedita? Tempora quaerat ex ea temporibus in tempore
                      voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda
                      ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!
                      Accusantium atque elit voluptate asperiores corrupti temporibus
                      mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis
                      id quos dolorum eaque suscipit magni delectus maxime. Sit odit
                      provident vel magnam quod. Possimus eligendi non corrupti tenetur
                      culpa accusantium quod quis. Voluptatum quaerat animi dolore
                      maiores molestias voluptate? Necessitatibus illo omnis laborum hic
                      enim minima! Similique. Dolor voluptatum reprehenderit nihil
                      adipisci aperiam voluptatem soluta magnam accusamus iste incidunt
                      tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo
                      animi ratione. Sunt odit similique doloribus temporibus
                      reiciendis! Ullam. Dolor dolores veniam animi sequi dolores
                      molestias voluptatem iure velit. Elit dolore quaerat incidunt enim
                      aut distinctio. Ratione molestiae laboriosam similique laboriosam
                      eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleHide}>Close</Button>
                  </Modal.Footer>
                </Modal> */}
                <h5 id="name">{item.name}</h5>
                <h5 id="price"><b>{item.price}</b></h5> 
                <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                Mollitia reiciendis porro quo magni incidunt dolore amet atque
                facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum
                dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis
                laudantium quibusdam quidem corporis architecto veritatis. Ex
                facilis minima beatae sunt perspiciatis placeat. Quasi corporis
                odio eaque voluptatibus ratione magnam nulla? Amet cum maiores
                consequuntur totam dicta! Inventore adipisicing vel vero odio modi
                doloremque? Vitae porro impedit ea minima laboriosam quisquam
                neque. Perspiciatis omnis obcaecati consequatur sunt deleniti
                similique facilis sequi. Ipsum harum vitae modi reiciendis
                officiis. Quas laudantium laudantium modi corporis nihil provident
                consectetur omnis, natus nulla distinctio illum corporis. Sit ex
                earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum
                illum architecto aspernatur perspiciatis error fuga illum, tempora
                harum earum, a dolores. Animi facilis inventore harum dolore
                accusamus fuga provident molestiae eum! Odit dicta error dolorem
                sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum
                saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat
                officia culpa sint! Beatae voluptates voluptatem excepturi
                molestiae alias in tenetur beatae placeat architecto. Sit possimus
                rerum fugiat sapiente aspernatur. Necessitatibus tempora animi
                dicta perspiciatis tempora a velit in! Doloribus perspiciatis
                doloribus suscipit nam earum. Deleniti veritatis eaque totam
                assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus
                eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur
                alias ipsum repudiandae! Quia omnis quisquam dignissimos a
                mollitia. Suscipit aspernatur eum maiores repellendus ipsum
                doloribus alias voluptatum consequatur. Consectetur quibusdam
                veniam quas tenetur necessitatibus repudiandae? Rem optio vel
                alias neque optio sapiente quidem similique reiciendis tempore.
                Illum accusamus officia cum enim minima eligendi consectetur nemo
                veritatis nam nisi! Adipisicing nobis perspiciatis dolorum
                adipisci soluta architecto doloremque voluptatibus omnis debitis
                quas repellendus. Consequuntur assumenda illum commodi mollitia
                asperiores? Quis aspernatur consequatur modi veritatis aliquid at?
                Atque vel iure quos. Amet provident voluptatem amet aliquam
                deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis
                neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum
                sed atque molestias debitis omnis! Sit sint repellendus deleniti
                officiis distinctio. Impedit vel quos harum doloribus corporis.
                Laborum ullam nemo quaerat reiciendis recusandae minima dicta
                molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.
                Amet exercitationem quasi velit inventore neque doloremque!
                Consequatur neque dolorem vel impedit sunt voluptate. Amet quo
                amet magni exercitationem libero recusandae possimus pariatur.
                Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur
                sit eligendi neque sunt soluta laudantium natus qui aperiam
                quisquam consectetur consequatur sit sint a unde et. At voluptas
                ut officiis esse totam quasi dolorem! Hic deserunt doloribus
                repudiandae! Lorem quod ab nostrum asperiores aliquam ab id
                consequatur, expedita? Tempora quaerat ex ea temporibus in tempore
                voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda
                ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!
                Accusantium atque elit voluptate asperiores corrupti temporibus
                mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis
                id quos dolorum eaque suscipit magni delectus maxime. Sit odit
                provident vel magnam quod. Possimus eligendi non corrupti tenetur
                culpa accusantium quod quis. Voluptatum quaerat animi dolore
                maiores molestias voluptate? Necessitatibus illo omnis laborum hic
                enim minima! Similique. Dolor voluptatum reprehenderit nihil
                adipisci aperiam voluptatem soluta magnam accusamus iste incidunt
                tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo
                animi ratione. Sunt odit similique doloribus temporibus
                reiciendis! Ullam. Dolor dolores veniam animi sequi dolores
                molestias voluptatem iure velit. Elit dolore quaerat incidunt enim
                aut distinctio. Ratione molestiae laboriosam similique laboriosam
                eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
              </div>);})
            }
        </Slider>
      </div>
    );
  }
}