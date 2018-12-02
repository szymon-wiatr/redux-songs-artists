import React from 'react';
import AddArtist from '../containers/AddArtist';
import FilteredArtistList from '../containers/FilteredArtistList'
import ArtistFilters from './ArtistFilters';
import logo from '../../logo.svg';

const Artists = () => {
  return (
    <div className="ui segment artists">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Favorite artists</h2>
      <code>
        Add and click to 
        <span role="img" aria-label="Superlike"> 👍 </span>
        superlike
      </code>
      <AddArtist />
      <FilteredArtistList />
      <ArtistFilters />
    </div>
  );
};

export default Artists;
