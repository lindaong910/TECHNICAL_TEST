import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavigationBar.css';
import logo from './images/logo.jpg';

export default class NavigationBar extends Component {
  render() {
    return (  
      <Navbar fixedTop className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
           <span> <a href={`/home`}><img src={logo} alt="logo" width="150" height="50"/></a></span>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href={`/home`} id="btn-home" > Home</NavItem>
          <NavItem eventKey={2} href={`/browse`} id="btn-browse"> Browse</NavItem>
          <NavItem eventKey={2} href={`/about-us`} id="btn-about-us"> About Us</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
