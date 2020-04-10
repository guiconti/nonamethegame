import { VISIBLE_MONSTERS } from '../types/monster';

export function visibleMonsters(payload) {
  return {
    type: VISIBLE_MONSTERS,
    payload,
  };
}
