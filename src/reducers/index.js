import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: (state = {}) => state,
  games: (state = {}) => state,
  overlaps: (state = {}) => state,
  form: formReducer,
});

export default rootReducer;
