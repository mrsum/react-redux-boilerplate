/**
 * Used global mocks: mockAxios, mockStore
 * See all global mock variables in config/jest/helpers.js
 */

// ------------------------------
// Depends
// ------------------------------
import { getTracks, getTrackById } from './../index';
import { ActionTypes } from '_shared/constants/tracks';
import { PENDING, SUCCESS } from '_shared/constants/global';



describe('Tracks::Actions', () => {
  let store;

  afterEach(() => {
    mockAxios.reset();
  })

  beforeEach(() => {
    store = mockStore({ tracks: [] });
  })


  it('getTracks', () => {
    const bestResponse = [ { id: 1, title: 'TITLE' } ];
    const expectedActions = [
      { type: ActionTypes.REQUEST_TRACKS + PENDING },
      { type: ActionTypes.REQUEST_TRACKS + SUCCESS, payload: bestResponse }
    ];

    mockAxios
      .onGet('http://api.soundcloud.com/tracks')
      .reply(config => {
        return [
          200,
          bestResponse
        ];
      });


    return store.dispatch(getTracks()).then(res => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })


  it('getTrackById', () => {
    const bestResponse = { id: 1, title: 'TITLE' };
    const expectedActions = [
      { type: ActionTypes.REQUEST_TRACK + PENDING },
      { type: ActionTypes.REQUEST_TRACK + SUCCESS, payload: bestResponse }
    ];

    mockAxios
      .onGet(/http:\/\/api.soundcloud.com\/tracks\/([0-9]+)/)
      .reply(config => {
        return [
          200,
          bestResponse
        ];
      });

    return store.dispatch(getTrackById(12)).then(res => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
})
