import { put, call, take, fork, all } from 'redux-saga/effects';
import gameMap from '../apis/gameMap';
import { FETCH_GAME_MAP } from '../types/game';
import { mapInfo } from '../actions/gameActions';

export function* fetchGameMap() {
  // yield put(loading());
  try {
    const response = yield call(gameMap);
    yield put(mapInfo(response.data.map));
  } catch(err) {
    //  Handle error with an action
  }
}

function* watchFetchGameMap() {
  while(true) {
    yield take(FETCH_GAME_MAP);
    yield call(fetchGameMap);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchGameMap),
  ]);
}
