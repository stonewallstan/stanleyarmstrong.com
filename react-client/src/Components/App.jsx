import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './footerComponent/Footer';
import MediaPage from './MediaPage';
import TechPage from './TechPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name = "home" exact path="/" component={HomePage} />
          <Route name = "media" exact path="/media" component={MediaPage} />
          <Route name = "tech" exact path="/tech" component={TechPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
