'use strict';

// ------------------------------
// Depends
// ------------------------------
import styles from './_styles';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTracks } from '_shared/actions/tracks';

class IndexPage extends Component {

  static defaultProps = {
    tracks: []
  };

  static propTypes = {
    tracks: PropTypes.array
  };

  static fetchData(dispatch) {
    const promiseArr = [
      dispatch(getTracks())
    ];
    return Promise.all(promiseArr);
  }

  render() {
    const { tracks } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.list}>
        {tracks.map((item, key) => {
          return (
            <div className={styles.track} key={key}>
              <Link to={`/track/${item.id}`}>
                <h4>{item.title}</h4>
              </Link>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps)(IndexPage);
