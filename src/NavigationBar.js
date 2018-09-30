import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavigationBar.css';
import logo from './images/LogoSample_ByTailorBrands (5).jpg';
import {Link} from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (  
      <Navbar fixedTop className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
           <span> <img src={logo} alt="logo" width="50" height="50"/></span>Spring Collection
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/home" id="btn-home" > <Link to = {`/home`}>Home</Link></NavItem>
          <NavItem eventKey={2} href="/browse" id="btn-browse"> <Link to = {`/browse`}>Browse</Link> </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
