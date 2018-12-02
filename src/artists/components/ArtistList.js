import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists, onArtistClick }) => (
  <ul className="favorite-artists">
    {artists.map((artist, index) => (
      <Artist key={index} {...artist} onClick={() => onArtistClick(artist.id)} />
    ))}
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      superliked: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onArtistClick: PropTypes.func.isRequired
};

export default ArtistList;