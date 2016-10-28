// ------------------------------
// Depends
// ------------------------------
import reducer from './../index';
import { ActionTypes } from '_shared/constants/tracks';
import { PENDING, SUCCESS } from '_shared/constants/global';


describe('Tracks::Reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  });

  it(`should hande ${ActionTypes.REQUEST_TRACK + PENDING}`, () => {
    expect(
      reducer([], {
        type: ActionTypes.REQUEST_TRACK + PENDING,
        payload: []
      })
    ).toEqual([]);
  });

  it(`should hande ${ActionTypes.REQUEST_TRACKS + PENDING}`, () => {
    expect(
      reducer([], {
        type: ActionTypes.REQUEST_TRACKS + PENDING,
        payload: []
      })
    ).toEqual([]);
  });

  it(`should handle ${ActionTypes.REQUEST_TRACKS + SUCCESS}`, () => {
    const expectedPayload = [ { id: 1, title: 'TITLE' } ];

    expect(
      reducer([], {
        type: ActionTypes.REQUEST_TRACKS + SUCCESS,
        payload: expectedPayload
      })
    ).toEqual(expectedPayload);
  });

  it(`should handle ${ActionTypes.REQUEST_TRACK + SUCCESS}`, () => {
    const expectedPayload = { id: 1, title: 'TITLE' };

    expect(
      reducer([], {
        type: ActionTypes.REQUEST_TRACK + SUCCESS,
        payload: expectedPayload
      })
    ).toEqual(expectedPayload);
  });
});
