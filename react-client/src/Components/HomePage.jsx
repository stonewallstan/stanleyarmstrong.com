import React, { Component } from 'react';
import styles from './index.module.css';
import me from '../assets/me.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className = {styles.intro}>
          <h2>
            Hi, I'm Stanley!
          </h2>
          <img
            src ={me}
            className = {styles.me}
            ></img>
          <p>
            That's what I look like if you were curious!
          </p>
        </div>

      </div>
    )
  }
}

export default HomePage;
