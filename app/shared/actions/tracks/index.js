// ------------------------------
// Depends
// ------------------------------
import { ActionTypes } from '_shared/constants/tracks';
import axios from 'axios';



/**
 * Get all topics
 * @param  {Object} params
 * @return {[type]}
 */
export const getTracks = (params = {}) => ({
  type: ActionTypes.REQUEST_TRACKS,
  payload: axios.get('http://api.soundcloud.com/tracks', {
    params: Object.assign({
      client_id: '04a0e1708f413b9e335d4b13ea98c253',
      genres: 'indie',
      limit: 25
    }, params)
  }).then(res => res.data)
});


/**
 * Get topic by ID
 * @param  {number} id
 * @param  {Object} [params={}]
 * @return {Promise}
 */
export const getTrackById = (id, params = {}) => ({
  type: ActionTypes.REQUEST_TRACK,
  payload: axios.get(`http://api.soundcloud.com/tracks/${id}`, {
    params: Object.assign({
      client_id: '04a0e1708f413b9e335d4b13ea98c253'
    }, params)
  }).then(res => res.data)
});
