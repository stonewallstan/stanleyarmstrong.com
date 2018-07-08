import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../index.module.css';

class NavBar extends Component{
  render() {
    return (
      <header>
        <ul className = {styles.headerButtons}>
          <li className= {styles.navButton}>
            <Link to="/">Home</Link>
          </li>
          <li className = {styles.navButton}>
            <Link to = "/tech">Tech</Link>
          </li>
          <li className = {styles.navButton}>
            <Link to ="/media">Media</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
