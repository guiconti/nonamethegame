import { put, call, take, fork, all } from 'redux-saga/effects';
import {
  FETCH_LIST_ADVENTURERS,
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER
} from '../types/adventurer';
import { changeRoute } from '../actions/navigationActions';
import { loading, adventurersList } from '../actions/adventurerActions';
import listAdventurers from '../apis/listAdventurers';
import createAdventurer from '../apis/createAdventurer';
import { NEW_ADVENTURER, ADVENTURERS } from '../constants/routes';

export function* fetchListAdventurers() {
  yield put(loading());
  try {
    const response = yield call(listAdventurers);
    yield put(adventurersList(response.data));
  } catch(err) {
    //  Handle error with an action
  }
}

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
    yield put(changeRoute(ADVENTURERS));
  } catch(err) {
    //  Handle error with an action
  }
}

function* watchFetchListAdventurers() {
  while (true) {
    yield take(FETCH_LIST_ADVENTURERS);
    yield call(fetchListAdventurers);
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
    fork(watchFetchListAdventurers),
    fork(watchCreateNewAdventurer),
    fork(watchExitAdventurerCreation),
    fork(watchFetchCreateAdventurer)
  ]);
}
