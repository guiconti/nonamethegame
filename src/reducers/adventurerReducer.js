import initialState from './initialState';
import objectAssign from 'object-assign';
import { ADVENTURER_LOADING, ADVENTURERS_LIST, ADVENTURER_INFO } from '../types/adventurer';

export default function adventurerReducer(state = initialState.adventurer, action) {
  switch (action.type) {
    case ADVENTURER_LOADING:
      return objectAssign({}, state, { loading: true });
    case ADVENTURERS_LIST:
      return objectAssign({}, state, {
        loading: false,
        userAdventurers: action.payload
      });
    case ADVENTURER_INFO:
      return objectAssign({}, state, {
        loading: false,
        info: action.payload
      });
    default:
      return state;
  }
}
