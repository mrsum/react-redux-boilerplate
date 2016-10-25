// ------------------------------
// Depends
// ------------------------------
import styles from './_styles';
import React, { Component } from 'react';
import { Link } from 'react-router';

const Logo = class Logo extends Component {
  render() {
    return (
      <pre className={styles.logo}>
        <Link to='/'>
          <code className={styles.monospace}>
          ................................ <br/>
          ..####...##..##..######..#####.. <br/>
          .##......##..##....##....##..##. <br/>
          ..####...######....##....#####.. <br/>
          .....##..##..##....##....##..... <br/>
          ..####...##..##..######..##..... <br/>
          ................................ <br/>
          </code>
        </Link>
      </pre>
    );
  }
};

export default Logo;
