import initialState from './initialState';
import objectAssign from 'object-assign';
import { ADVENTURER_LOADING } from '../types/adventurer';

export default function adventurerReducer(state = initialState.adventurer, action) {
  switch (action.type) {
    case ADVENTURER_LOADING:
      return objectAssign({}, state, { loading: true });
    default:
      return state;
  }
}
