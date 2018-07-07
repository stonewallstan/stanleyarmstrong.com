import React, { Component } from 'react';
import styles from './index.module.css';
import me from '../assets/me.jpg';

console.log(me);

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className = { styles.hi }>
            Hi, I'm Stanley!
          </h1>
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
