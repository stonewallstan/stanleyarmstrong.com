import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className = "intro">
          Hi, I'm Stanley!
        </h1>
        <img className = "dasme" src = "./assets/me.jpg"></img>
        <p>
          That's what I look like if you were curious!
        </p>

      </div>
    )
  }
}

export default HomePage;
