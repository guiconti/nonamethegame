import initialState from './initialState';
import objectAssign from 'object-assign';
import { MESSAGE_RECEIVED } from '../types/battleLog';

export default function gameReducer(state = initialState.battleLog, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return objectAssign({}, state, { messages: state.messages.concat(action.payload) });
    default:
      return state;
  }
}
