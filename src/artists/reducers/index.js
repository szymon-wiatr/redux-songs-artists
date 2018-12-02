import { combineReducers } from 'redux';
import artists from './artists';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  artists,
  visibilityFilter
});
