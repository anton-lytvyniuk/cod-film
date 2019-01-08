import { combineReducers } from 'redux';

import filmReducer from './film';
import dashboardReducer from './dashboard';

export default combineReducers({
  activeFilm: filmReducer,
  films: dashboardReducer,
});