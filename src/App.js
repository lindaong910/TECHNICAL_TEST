import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

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
            <Route exact path='/browse' component={Browse} />
            <Route exact path='/about-us' component={AboutUs} />
          </div>
          <div className="footer">
            <div class="footer-copyright text-center py-3">© 2018 Spring Collection. All Rights Reserved.</div>
          </div>
        </div>
      </BrowserRouter>
     //<Browse/>
    );
  }
};

export default App;