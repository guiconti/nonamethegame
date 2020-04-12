import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adventurerReducer from './adventurerReducer';
import gameReducer from './gameReducer';
import monsterReducer from './monsterReducer';
import battleLogReducer from './battleLogReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  adventurer: adventurerReducer,
  game: gameReducer,
  monster: monsterReducer,
  battleLog: battleLogReducer,
});

export default rootReducer;
