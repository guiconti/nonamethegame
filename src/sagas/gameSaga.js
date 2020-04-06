import { put, call, select, take, fork, all } from 'redux-saga/effects';
import connect from '../apis/connect';
import gameMap from '../apis/gameMap';
import { FETCH_CONNECT, FETCH_GAME_MAP, UPDATE_GAME_METADATA } from '../types/game';
import { mapInfo, startDrawingMap } from '../actions/gameActions';
import { updatePosition } from '../actions/adventurerActions';
import { getAdventurerPosition } from '../reducers/selectors';

//  Executions

export function* fetchConnect() {
  try {
    yield call(connect);
  } catch (err) {
    //  Handle error with an action
  }
}

export function* fetchGameMap() {
  // yield put(loading());
  try {
    const response = yield call(gameMap);
    yield put(mapInfo(response.data.map));
  } catch (err) {
    //  Handle error with an action
  }
}

export function* updateGameMetadata(payload) {
  let shouldRedawnMinimap = false;
  const newAdventurer = payload.adventurer;
  const oldPosition = yield select(getAdventurerPosition);
  //  Check if adventure's position changed
  if (
    !shouldRedawnMinimap &&
    (oldPosition.x !== newAdventurer.position.x || oldPosition.y !== newAdventurer.position.y)
  ) {
    yield put(updatePosition(newAdventurer.position));
    shouldRedawnMinimap = true;
  }
  if (shouldRedawnMinimap) {
    yield put(startDrawingMap());
  }
}

//  Watchers

function* watchFetchConnect() {
  while (true) {
    yield take(FETCH_CONNECT);
    yield call(fetchConnect);
  }
}

function* watchFetchGameMap() {
  while (true) {
    yield take(FETCH_GAME_MAP);
    yield call(fetchGameMap);
  }
}

function* watchUpdateGameMetadata() {
  while (true) {
    const { payload } = yield take(UPDATE_GAME_METADATA);
    yield fork(updateGameMetadata, payload);
  }
}

export default function* watch() {
  yield all([fork(watchFetchConnect), fork(watchFetchGameMap), fork(watchUpdateGameMetadata)]);
}
