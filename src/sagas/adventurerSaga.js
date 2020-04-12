import { put, call, take, fork, all } from 'redux-saga/effects';
import {
  FETCH_LIST_ADVENTURERS,
  FETCH_ADVENTURER_INFO,
  FETCH_SELECT_ADVENTURER,
  CREATE_NEW_ADVENTURER,
  EXIT_ADVENTURER_CREATION,
  FETCH_CREATE_ADVENTURER,
} from '../types/adventurer';
import { changeRoute } from '../actions/navigationActions';
import {
  listLoading,
  creationLoading,
  creationLoaded,
  adventurerLoading,
  adventurersList,
  updateAdventurerInfo,
  adventurerLoaded,
  updateInventory,
} from '../actions/adventurerActions';
import listAdventurers from '../apis/listAdventurers';
import selectAdventurer from '../apis/selectAdventurer';
import adventurerInfo from '../apis/adventurerInfo';
import createAdventurer from '../apis/createAdventurer';
import { NEW_ADVENTURER, ADVENTURERS, HOME } from '../constants/routes';

export function* fetchListAdventurers() {
  yield put(listLoading());
  try {
    const response = yield call(listAdventurers);
    yield put(adventurersList(response.data));
  } catch (err) {
    //  Handle error with an action
  }
}

export function* fetchSelectAdventurer(payload) {
  yield put(adventurerLoading());
  try {
    const response = yield call(selectAdventurer, payload);
    yield put(updateAdventurerInfo(response.data));
    yield put(changeRoute(HOME));
  } catch (err) {
    //  Handle error with an action
  }
}

export function* fetchAdventurerInfo(payload) {
  try {
    const response = yield call(adventurerInfo, payload);
    yield put(updateAdventurerInfo(response.data));
    yield put(updateInventory(response.data.inventory));
    yield put(adventurerLoaded());
  } catch (err) {
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
  yield put(creationLoading());
  try {
    yield call(createAdventurer, payload);
    yield put(creationLoaded());
    yield put(changeRoute(ADVENTURERS));
  } catch (err) {
    yield put(creationLoaded());
    //  Handle error with an action
  }
}

function* watchFetchListAdventurers() {
  while (true) {
    yield take(FETCH_LIST_ADVENTURERS);
    yield call(fetchListAdventurers);
  }
}

function* watchFetchSelectAdventurer() {
  while (true) {
    const { payload } = yield take(FETCH_SELECT_ADVENTURER);
    yield call(fetchSelectAdventurer, payload);
  }
}

function* watchFetchAdventurerInfo() {
  while (true) {
    const { payload } = yield take(FETCH_ADVENTURER_INFO);
    yield call(fetchAdventurerInfo, payload);
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
    fork(watchFetchSelectAdventurer),
    fork(watchFetchAdventurerInfo),
    fork(watchCreateNewAdventurer),
    fork(watchExitAdventurerCreation),
    fork(watchFetchCreateAdventurer),
  ]);
}
