import initialState from './initialState';
import objectAssign from 'object-assign';
import {
  LOADING,
  CONNECTED,
  DISCONNECTED,
  MAP_INFO,
  STOP_DRAWING_MAP,
  START_DRAWING_MAP,
} from '../types/game';

export default function gameReducer(state = initialState.game, action) {
  switch (action.type) {
    case LOADING:
      return objectAssign({}, state, { loading: true });
    case CONNECTED:
      return objectAssign({}, state, { connected: true });
    case DISCONNECTED:
      return objectAssign({}, state, { connected: false });
    case MAP_INFO:
      return objectAssign({}, state, { map: action.payload });
    case STOP_DRAWING_MAP:
      return objectAssign({}, state, { drawMap: false });
    case START_DRAWING_MAP:
      return objectAssign({}, state, { drawMap: true });
    default:
      return state;
  }
}
