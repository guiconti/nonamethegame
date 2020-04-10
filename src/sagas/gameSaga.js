import { put, call, select, take, fork, all } from 'redux-saga/effects';
import connect from '../apis/connect';
import gameMap from '../apis/gameMap';
import { FETCH_CONNECT, FETCH_GAME_MAP, UPDATE_GAME_METADATA } from '../types/game';
import { mapInfo, startDrawingMap } from '../actions/gameActions';
import { visibleMonsters, visibleMonstersPositions } from '../actions/monsterActions';
import { updatePosition } from '../actions/adventurerActions';
import { getAdventurerPosition, getVisibleMonstersPositions } from '../reducers/selectors';

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
  let shouldRedrawnMinimap = false;
  const newAdventurer = payload.adventurer;
  const monsters = payload.monsters;
  const oldPosition = yield select(getAdventurerPosition);

  //  Check if adventure's position changed
  if (
    !shouldRedrawnMinimap &&
    (oldPosition.x !== newAdventurer.position.x || oldPosition.y !== newAdventurer.position.y)
  ) {
    yield put(updatePosition(newAdventurer.position));
    shouldRedrawnMinimap = true;
  }

  //  Visible monsters
  let newVisibleMonstersPositions = {};
  let visibleMonstersPositionsChanged = false;
  const oldVisibleMonstersPositions = yield select(getVisibleMonstersPositions);
  const monstersIds = Object.keys(monsters);
  for (let i = 0; i < monstersIds.length; i++) {
    const monster = monsters[monstersIds[i]];
    const monsterPositionIndex = `${monster.position.x}-${monster.position.y}`;
    newVisibleMonstersPositions[monsterPositionIndex] = monstersIds[i];
    if (
      !oldVisibleMonstersPositions[monsterPositionIndex] ||
      oldVisibleMonstersPositions[monsterPositionIndex] !== monstersIds[i]
    ) {
      visibleMonstersPositionsChanged = true;
    }
  }
  if (
    visibleMonstersPositionsChanged ||
    monstersIds.length !== Object.keys(oldVisibleMonstersPositions).length
  ) {
    shouldRedrawnMinimap = true;
    yield put(visibleMonstersPositions(newVisibleMonstersPositions));
    yield put(visibleMonsters(monsters));
  }

  if (shouldRedrawnMinimap) {
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
