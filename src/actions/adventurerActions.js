import {
  ADVENTURERS_LIST_LOADING,
  ADVENTURER_CREATION_LOADING,
  ADVENTURER_CREATION_LOADED,
  ADVENTURER_LOADING,
  FETCH_LIST_ADVENTURERS,
  ADVENTURERS_LIST,
  FETCH_SELECT_ADVENTURER,
  FETCH_ADVENTURER_INFO,
  ADVENTURER_INFO,
  ADVENTURER_LOADED,
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER,
  UPDATE_POSITION,
} from '../types/adventurer';

export function listLoading() {
  return {
    type: ADVENTURERS_LIST_LOADING,
  };
}

export function creationLoading() {
  return {
    type: ADVENTURER_CREATION_LOADING,
  };
}

export function creationLoaded() {
  return {
    type: ADVENTURER_CREATION_LOADED,
  };
}

export function adventurerLoading() {
  return {
    type: ADVENTURER_LOADING,
  };
}

export function fetchListAdventurers() {
  return {
    type: FETCH_LIST_ADVENTURERS,
  };
}

export function adventurersList(payload) {
  return {
    type: ADVENTURERS_LIST,
    payload,
  };
}

export function fetchSelectAdventurer(payload) {
  return {
    type: FETCH_SELECT_ADVENTURER,
    payload,
  };
}

export function fetchAdventurerInfo() {
  return {
    type: FETCH_ADVENTURER_INFO,
  };
}

export function updateAdventurerInfo(payload) {
  return {
    type: ADVENTURER_INFO,
    payload,
  };
}

export function adventurerLoaded() {
  return {
    type: ADVENTURER_LOADED,
  };
}

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

export function fetchCreateAdventurer(payload) {
  return {
    type: FETCH_CREATE_ADVENTURER,
    payload,
  };
}

export function updatePosition(payload) {
  return {
    type: UPDATE_POSITION,
    payload,
  };
}
