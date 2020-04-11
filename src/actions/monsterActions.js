import { VISIBLE_MONSTERS, VISIBLE_MONSTERS_POSITIONS, UPDATE_TARGET } from '../types/monster';

export function visibleMonsters(payload) {
  return {
    type: VISIBLE_MONSTERS,
    payload,
  };
}

export function visibleMonstersPositions(payload) {
  return {
    type: VISIBLE_MONSTERS_POSITIONS,
    payload,
  };
}
export function updateTarget(payload) {
  return {
    type: UPDATE_TARGET,
    payload,
  };
}
