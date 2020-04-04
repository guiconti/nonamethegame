import initialState from './initialState';
import objectAssign from 'object-assign';
import { LOADING, MAP_INFO } from '../types/game';

export default function gameReducer(state = initialState.game, action) {
  switch (action.type) {
    case LOADING:
      return objectAssign({}, state, { loading: true });
    case MAP_INFO:
      return objectAssign({}, state, { map: action.payload });
    default:
      return state;
  }
}
