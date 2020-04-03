import { CREATE_NEW_ADVENTURER, EXIT_ADVENTURER_CREATION } from '../types/adventurer';

export function newAdventurer() {
  return {
    type: CREATE_NEW_ADVENTURER,
  };
}

export function exitAdventurerCreation() {
  return {
    type: EXIT_ADVENTURER_CREATION,
  };
}
