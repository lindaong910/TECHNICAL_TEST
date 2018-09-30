import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './NavigationBar.css'
import logo from './images/logo2.jpg'

export default class NavigationBar extends Component {
  render() {
    return (  
      <Navbar fixedTop className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a><img id='logo' src={logo}/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/Home" id="btn-home" > Home </NavItem>
          <NavItem eventKey={2} href="/Browse" id="btn-browse"> Browse </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
