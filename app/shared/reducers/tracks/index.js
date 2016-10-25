'use strict';

// ------------------------------
// Import rest actions
// ------------------------------
import { REQUEST_TRACK, REQUEST_TRACKS, SUCCESS, PENDING } from '_shared/actions/_types';

/**
 * @param  {Array}  state  [description]
 * @param  {Object} action [description]
 * @return {[type]}        [description]
 */
export default function(state = [], action = {}) {
  switch (action.type) {

    case REQUEST_TRACK + PENDING:
    case REQUEST_TRACKS + PENDING:
      return [];

    case REQUEST_TRACK + SUCCESS:
    case REQUEST_TRACKS + SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
