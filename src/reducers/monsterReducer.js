import initialState from './initialState';
import objectAssign from 'object-assign';
import { VISIBLE_MONSTERS, VISIBLE_MONSTERS_POSITIONS, UPDATE_TARGET } from '../types/monster';

export default function monsterReducer(state = initialState.monster, action) {
  switch (action.type) {
    case VISIBLE_MONSTERS:
      return objectAssign({}, state, { visibleMonsters: action.payload });
    case VISIBLE_MONSTERS_POSITIONS:
      return objectAssign({}, state, { visibleMonstersPositions: action.payload });
    case UPDATE_TARGET:
      return objectAssign({}, state, { target: action.payload });
    default:
      return state;
  }
}
