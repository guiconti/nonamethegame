import {
  ADVENTURER_LOADING,
  FETCH_LIST_ADVENTURERS,
  ADVENTURERS_LIST,
  FETCH_SELECT_ADVENTURER,
  FETCH_ADVENTURER_INFO,
  ADVENTURER_INFO,
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER,
  UPDATE_POSITION
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

export function fetchSelectAdventurer(payload) {
  return {
    type: FETCH_SELECT_ADVENTURER,
    payload
  };
}

export function fetchAdventurerInfo() {
  return {
    type: FETCH_ADVENTURER_INFO
  };
}

export function updateAdventurerInfo(payload) {
  return {
    type: ADVENTURER_INFO,
    payload
  }
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

export function updatePosition(payload) {
  return {
    type: UPDATE_POSITION,
    payload
  };
}
