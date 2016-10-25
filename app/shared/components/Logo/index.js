'use strict';

import styles from './_styles';
import React, { Component } from 'react';

const Logo = class Logo extends Component {
  render() {
    return (
      <pre>
        <code className={styles.monospace}>
        ................................ <br/>
        ..####...##..##..######..#####.. <br/>
        .##......##..##....##....##..##. <br/>
        ..####...######....##....#####.. <br/>
        .....##..##..##....##....##..... <br/>
        ..####...##..##..######..##..... <br/>
        ................................ <br/>
        </code>
      </pre>
    );
  }
};

export default Logo;
