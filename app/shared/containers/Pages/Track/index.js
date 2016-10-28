// ------------------------------
// Depends
// ------------------------------
import styles from './_styles.styl';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTrackById } from '_shared/actions/tracks';

class TrackPage extends Component {

  static defaultProps = {
    track: {}
  };

  static propTypes = {
    track: PropTypes.any
  };

  static fetchData(dispatch, uriParams) {
    const promiseArr = [
      dispatch(getTrackById(uriParams.splat || 1))
    ];
    return Promise.all(promiseArr);
  }


  loadTrack(url) {
    let audio;
    if (url) {
      audio = (
        <audio autoPlay controls preload='none' className={styles.audio}>
          <source src={`${url}?client_id=04a0e1708f413b9e335d4b13ea98c253`} type='audio/mpeg' />
        </audio>
      );
    }
    return audio;
  }

  render() {
    const { track } = this.props;

    return (
      <div className={styles.container}>
        <img src={track.artwork_url} />
        <h4>{track.title}</h4>
        <p>{track.description}</p>

        { this.loadTrack(track.stream_url) }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    track: state.tracks
  };
}

export default connect(mapStateToProps)(TrackPage);
