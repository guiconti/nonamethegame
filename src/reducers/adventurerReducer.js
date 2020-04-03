import initialState from './initialState';
import objectAssign from 'object-assign';
import { ADVENTURER_LOADING, ADVENTURERS_LIST } from '../types/adventurer';

export default function adventurerReducer(state = initialState.adventurer, action) {
  switch (action.type) {
    case ADVENTURER_LOADING:
      return objectAssign({}, state, { loading: true });
    case ADVENTURERS_LIST:
      return objectAssign({}, state, {
        loading: false,
        userAdventurers: action.payload
      });
    default:
      return state;
  }
}
