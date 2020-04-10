import initialState from './initialState';
import objectAssign from 'object-assign';
import { VISIBLE_MONSTERS, VISIBLE_MONSTERS_POSITIONS } from '../types/monster';

export default function monsterReducer(state = initialState.monster, action) {
  switch (action.type) {
    case VISIBLE_MONSTERS:
      return objectAssign({}, state, { visibleMonsters: action.payload });
    case VISIBLE_MONSTERS_POSITIONS:
      return objectAssign({}, state, { visibleMonstersPositions: action.payload });
    default:
      return state;
  }
}
