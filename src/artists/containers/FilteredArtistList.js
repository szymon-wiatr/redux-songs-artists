import { connect } from 'react-redux';
import { clickArtist } from '../actions';
import ArtistList from '../components/ArtistList';

const getFilteredArtists = (artists, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return artists;
    case 'SHOW_SUPERLIKED':
      return artists.filter(t => t.superliked);
    case 'SHOW_FAVORITES':
      return artists.filter(t => !t.superliked);
    default:
  };
};

const mapStateToProps = state => {
  return {
    artists: getFilteredArtists(state.artists, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onArtistClick: id => {
      dispatch(clickArtist(id));
    }
  };
}

const FilteredArtistList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistList);

export default FilteredArtistList;
