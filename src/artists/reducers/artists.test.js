import reducer from './artists.js';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_ARTIST', () => {
    expect(
      reducer([], {
        type: 'ADD_ARTIST',
        text: 'Metallica',
        id: 0
      })
    ).toEqual([
      {
        text: 'Metallica',
        superliked: false,
        id: 0
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Led Zeppelin',
            superliked: false,
            id: 0
          }
        ],
        {
          type: 'ADD_ARTIST',
          text: 'Nirvana',
          id: 1
        }
      )
    ).toEqual([
      {
        text: 'Led Zeppelin',
        superliked: false,
        id: 0
      },
      {
        text: 'Nirvana',
        superliked: false,
        id: 1
      }
    ]);
  });
});
