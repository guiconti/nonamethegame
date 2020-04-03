import {
  ADVENTURER_LOADING,
  FETCH_LIST_ADVENTURERS,
  ADVENTURERS_LIST,
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER
} from '../types/adventurer';

export function loading() {
  return {
    type: ADVENTURER_LOADING
  };
}

export function fetchListAdventurers() {
  return {
    type: FETCH_LIST_ADVENTURERS
  };
}

export function adventurersList(payload) {
  return {
    type: ADVENTURERS_LIST,
    payload
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
