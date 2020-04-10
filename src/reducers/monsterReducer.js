import initialState from './initialState';
import objectAssign from 'object-assign';
import { VISIBLE_MONSTERS } from '../types/monster';

export default function monsterReducer(state = initialState.monster, action) {
  switch (action.type) {
    case VISIBLE_MONSTERS:
      return objectAssign({}, state, { visibleMonsters: action.payload });
    default:
      return state;
  }
}
