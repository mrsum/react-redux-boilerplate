// ------------------------------
// Depends
// ------------------------------
import styles from './_styles';
import React, { Component } from 'react';
import Logo from '_shared/components/Logo';

class MainLayout extends Component {

  render() {
    return (
      <app id='ship-app'>
        <Logo />
        <div className={styles.content}>
          { this.props.children }
        </div>
      </app>
    );
  }
}

export default MainLayout;
