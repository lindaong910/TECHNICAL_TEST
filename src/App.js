import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';

import NavigationBar from './NavigationBar';
 
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <div>
            <Route exact path={['/', '/home']} component={Home} />
            <Route exact path='/browse' component={Browse} />
          </div>
        </div>
      </BrowserRouter>
     //<Browse/>
    );
  }
};

export default App;