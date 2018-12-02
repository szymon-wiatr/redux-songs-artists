import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeArtist } from '../actions';

// it is fancy, because of dispatch reference
let removeArtistHelper = (dispatch, id) => {
  dispatch(removeArtist(id));
};

let Artist = ({ dispatch, onClick, superliked, text, id }) => (
  <li
    className={superliked ? 'superliked' : 'favorite'}
  >
    <span onClick={onClick}>{text}</span>
    <span onClick={() => {removeArtistHelper(dispatch, id)}} 
          className="remove-artist"
          aria-label="Cross Mark"
          role="img"
    >  ❌ </span>
  </li>);

Artist.propTypes = {
  onClick: PropTypes.func.isRequired,
  superliked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

Artist = connect()(Artist);

export default Artist;
