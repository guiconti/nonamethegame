import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adventurerReducer from './adventurerReducer';
import gameReducer from './gameReducer';
import monsterReducer from './monsterReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  adventurer: adventurerReducer,
  game: gameReducer,
  monster: monsterReducer,
});

export default rootReducer;
