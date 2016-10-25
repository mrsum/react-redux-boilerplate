// ------------------------------
// Import Actions Types
// ------------------------------
import { ActionTypes } from '_shared/constants/tracks';


/**
 * Get all topics
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
const getTracks = (params = {}) => ({
  type: ActionTypes.REQUEST_TRACKS,
  payload: fetch('http://api.soundcloud.com/tracks/?client_id=04a0e1708f413b9e335d4b13ea98c253&genres=indie&limit=25', params)
    .then(res => res.json())
});

const getTrackById = (id, params = {}) => ({
  type: ActionTypes.REQUEST_TRACK,
  payload: fetch(`http://api.soundcloud.com/tracks/${id}/?client_id=04a0e1708f413b9e335d4b13ea98c253`, params)
    .then(res => res.json())
});

export {
  getTracks,
  getTrackById
};
