import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../index.module.css';

class MoreNavigation extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button>
            <Link to = "/tech">
              Tech
            </Link>
          </Button>
          <Button>
            <Link to = "/media">
              Media
            </Link>
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default MoreNavigation;
