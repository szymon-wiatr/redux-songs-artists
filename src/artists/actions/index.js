import localStorageService from '../../apis/localStorage';

let nextArtistId = 0;
if (localStorageService.get('artists')) {
  nextArtistId = localStorageService.get('artists').length;
}

export const addArtist = text => ({
  type: 'ADD_ARTIST',
  id: nextArtistId++,
  text
});

export const removeArtist = id => ({
  type: 'REMOVE_ARTIST',
  id
});

export const setArtistFilter = filter => ({
  type: 'SET_ARTIST_FILTER',
  filter
})

export const clickArtist = id => ({
  type: 'CLICK_ARTIST',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SUPERLIKED: 'SHOW_SUPERLIKED',
  SHOW_FAVORITES: 'SHOW_FAVORITES'
};
