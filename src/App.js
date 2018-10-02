import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Browse from './Browse';
import AboutUs from './AboutUs';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="header">
            <NavigationBar />
          </div>
          <div>
            <Route exact path={['/', '/home']} component={Home} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/about-us" component={AboutUs} />
          </div>
          <footer class="footer-distributed">
            <div class="footer-left">
              <p class="footer-links">
                <div>
                  <a href={`/home`}>Home</a>
                </div>
                <div>
                  <a href={`/browse`}>Browse</a>
                </div>
                <div>
                  <a href={`/about-us`}>About Us</a>
                </div>
              </p>
            </div>

            <div class="footer-center">
              <span>CONTACT US</span>
              <div class="contact-us">
                <div>
                  <i class="fa fa-map-marker" style={{paddingBottom:"8px"}} />
                  <span> Musirin 2 Street</span> Jakarta, Indonesia
                </div>

                <div>
                  <i class="fa fa-phone" style={{paddingBottom:"8px"}}  />
                  <span> +62 87716038814</span>                     
                </div>

                <div>
                  <i class="fa fa-envelope" style={{paddingBottom:"8px"}}  />
                   <span> cs_springcollection@gmail.com</span>
                </div>
              </div>
            </div>

            <div class="footer-right">
              <p class="footer-company-about">
                <span>ABOUT THE COMPANY</span>
                <div id="about-us">
                  Spring Collection is a destination for young and confident
                  women. We are here to fulfill your fashion needs with unique
                  and fashion forward styles.
                </div>
              </p>
              <div class="footer-icons">
                <a href="https://www.facebook.com">
                  <i
                    id="social-fb"
                    class="fa fa-facebook-square fa-3x social"
                  />
                </a>
                <a href="https://youtube.com">
                  <i id="social-yt" class="fa fa-youtube-play fa-3x social" />
                </a>
                <a href="https://instagram.com">
                  <i id="social-ig" class="fa fa fa-instagram fa-3x social" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
