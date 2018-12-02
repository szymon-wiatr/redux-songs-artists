import * as actions from './index.js';

describe('actions', () => {
  it('should create an action to add a artist', () => {
    const text = 'Metallica'
    const expectedAction = {
      id: 0,
      type: 'ADD_ARTIST',
      text
    }
    expect(actions.addArtist(text)).toEqual(expectedAction)
  });
});
