import { put, call, take, fork, all } from 'redux-saga/effects';
import {
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER
} from '../types/adventurer';
import { changeRoute } from '../actions/navigationActions';
import { loading } from '../actions/adventurerActions';
import createAdventurer from '../apis/createAdventurer';
import { NEW_ADVENTURER, ADVENTURERS } from '../constants/routes';

export function* createNewAdventurer() {
  yield put(changeRoute(NEW_ADVENTURER));
}

export function* exitAdventurerCreation() {
  yield put(changeRoute(ADVENTURERS));
}

export function* fetchCreateAdventurer(payload) {
  yield put(loading());
  try {
    yield call(createAdventurer, payload);
    // yield put(signedIn());
    // yield put(changeRoute(ADVENTURERS));
  } catch(err) {
    //  Handle error with an action
  }
}

function* watchCreateNewAdventurer() {
  while (true) {
    yield take(CREATE_NEW_ADVENTURER);
    yield call(createNewAdventurer);
  }
}

function* watchExitAdventurerCreation() {
  while (true) {
    yield take(EXIT_ADVENTURER_CREATION);
    yield call(exitAdventurerCreation);
  }
}

function* watchFetchCreateAdventurer() {
  while (true) {
    const { payload } = yield take(FETCH_CREATE_ADVENTURER);
    yield call(fetchCreateAdventurer, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchCreateNewAdventurer),
    fork(watchExitAdventurerCreation),
    fork(watchFetchCreateAdventurer)
  ]);
}
