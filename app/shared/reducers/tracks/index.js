// ------------------------------
// Import rest actions
// ------------------------------
import { ActionTypes } from '_shared/constants/tracks';
import { SUCCESS, PENDING } from '_shared/constants/global';

/**
 * @param  {Array}  state  [description]
 * @param  {Object} action [description]
 * @return {[type]}        [description]
 */
export default function(state = [], action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_TRACK + PENDING:
    case ActionTypes.REQUEST_TRACKS + PENDING:
      return [];

    case ActionTypes.REQUEST_TRACK + SUCCESS:
    case ActionTypes.REQUEST_TRACKS + SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
