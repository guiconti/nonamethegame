import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adventurerReducer from './adventurerReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  adventurer: adventurerReducer,
});

export default rootReducer;
