import React from 'react';
import { connect } from 'react-redux';
import { addArtist } from '../actions';

let AddArtist = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addArtist(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit" className="add-artist">Add Artist</button>
      </form>
    </div>
  );
};
AddArtist = connect()(AddArtist);

export default AddArtist;
