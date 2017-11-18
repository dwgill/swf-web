import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import games from './games';
import users from './users';
import sharedGames from './sharedGames';

const rootReducer = combineReducers({
  users,
  games,
  sharedGames,
  form: formReducer,
});

export default rootReducer;
