import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import styles from '../index.module.css';

class NavBar extends Component{
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to = '/'>
                StanleyArmstrong
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey = {1}>
              <Link to = '/tech'>
                Tech
              </Link>
            </NavItem>
            <NavItem eventKey = {2}>
              <Link to = '/media'>
                Media
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
    </div>
    )
  }
}

export default NavBar;
