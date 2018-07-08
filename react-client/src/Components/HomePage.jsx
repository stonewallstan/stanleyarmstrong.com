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
          <h2>
            About Me
          </h2>
          <p>
            Where to begin, I guess. Well for starters, I am Computer Science
            student attending California Polytechnic State University or
            Cal Poly for short. So this website, you are looking at is
            programmed by me. Hold the applause though, it&apos; really not that
             big of a deal. What about oher things I do? Glad you asked, I am in
             the process of making a podcast getting coffee with my friends who
             attend University, and that will be starting this fall. 
          </p>
        </div>

      </div>
    )
  }
}

export default HomePage;
