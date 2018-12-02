import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const ArtistFilters = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_FAVORITES}>Favorites</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_SUPERLIKED}>Superliked</FilterLink>
  </p>
);

export default ArtistFilters;