import {
  ADVENTURER_LOADING,
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER
} from '../types/adventurer';

export function loading() {
  return {
    type: ADVENTURER_LOADING
  };
}

export function newAdventurer() {
  return {
    type: CREATE_NEW_ADVENTURER
  };
}

export function exitAdventurerCreation() {
  return {
    type: EXIT_ADVENTURER_CREATION
  };
}

export function fetchCreateAdventurer(payload) {
  return {
    type: FETCH_CREATE_ADVENTURER,
    payload
  };
}
