import { put, call, take, fork, all } from 'redux-saga/effects';
import { CREATE_NEW_ADVENTURER, EXIT_ADVENTURER_CREATION } from '../types/adventurer';
import { changeRoute } from '../actions/navigationActions';
import { NEW_ADVENTURER, ADVENTURERS } from '../constants/routes';

export function* createNewAdventurer() {
  yield put(changeRoute(NEW_ADVENTURER));
}

export function* exitAdventurerCreation() {
  yield put(changeRoute(ADVENTURERS));
}

function* watchCreateNewAdventurer() {
  while(true) {
    yield take(CREATE_NEW_ADVENTURER);
    yield call(createNewAdventurer);
  }
}
function* watchExitAdventurerCreation() {
  while(true) {
    yield take(EXIT_ADVENTURER_CREATION);
    yield call(exitAdventurerCreation);
  }
}

export default function* watch() {
  yield all([
    fork(watchCreateNewAdventurer),
    fork(watchExitAdventurerCreation),
  ]);
}
