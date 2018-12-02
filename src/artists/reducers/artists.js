const artists = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ARTIST':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            superliked: false
          }
        ];
      case 'REMOVE_ARTIST':
        return state.filter(artist => artist.id !== action.id);
      case 'CLICK_ARTIST':
        return state.map(
          artist =>
            artist.id === action.id ? { ...artist, superliked: !artist.superliked } : artist
        );
      default:
        return state;
    }
  };

export default artists;
