import { VISIBLE_MONSTERS, VISIBLE_MONSTERS_POSITIONS } from '../types/monster';

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
