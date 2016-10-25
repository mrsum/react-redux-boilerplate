'use strict';

// Depends
import styles from './_styles';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class IndexPage extends Component {

  static defaultProps = {
    topics: []
  };

  static propTypes = {
    topics: PropTypes.array
  };

  static fetchData(dispatch, uriParams) {
    // dispatachable functions
    const promiseArr = [
      // dispatch(getTopics())
    ];
    return Promise.all(promiseArr);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Hello from the rShip</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    example: state.example
  };
}

export default connect(mapStateToProps)(IndexPage);
