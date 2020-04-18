import { put, call, select, take, fork, all } from 'redux-saga/effects';
import connect from '../apis/connect';
import gameMap from '../apis/gameMap';
import { FETCH_CONNECT, FETCH_GAME_MAP, UPDATE_GAME_METADATA, TARGET_MONSTER } from '../types/game';
import { mapInfo, startDrawingMap } from '../actions/gameActions';
import { visibleMonsters, visibleMonstersPositions, updateTarget } from '../actions/monsterActions';
import {
  updatePosition,
  updateAdventurerInfo,
  updateInventory,
  updateEquipment,
} from '../actions/adventurerActions';
import {
  getAdventurerHealth,
  getAdventurerCurrentHealth,
  getAdventurerMana,
  getAdventurerCurrentMana,
  getAdventurerExperience,
  getAdventurerPosition,
  getVisibleMonsters,
  getVisibleMonstersPositions,
  getTarget,
  getAdventurerInventory,
  getAdventurerEquipment,
} from '../reducers/selectors';
import webSocket from '../webSocket';
import { SOCKET_TARGET_MONSTER } from '../constants/sockets';

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

export function* checkAdventurerInfoUpdate(payload) {
  const currentAdventurer = {
    health: yield select(getAdventurerHealth),
    currentHealth: yield select(getAdventurerCurrentHealth),
    mana: yield select(getAdventurerMana),
    currentMana: yield select(getAdventurerCurrentMana),
    experience: yield select(getAdventurerExperience),
  };
  const keys = Object.keys(currentAdventurer);
  for (let i = 0; i < keys.length; i++) {
    if (payload[keys[i]] && currentAdventurer[keys[i]] !== payload[keys[i]]) {
      yield put(updateAdventurerInfo(payload));
      return;
    }
  }
}

export function* checkTargetUpdate(payload) {
  const currentTarget = yield select(getTarget);
  if (currentTarget !== payload) {
    yield put(updateTarget(payload));
  }
}

export function* checkAdventurerInventoryUpdate(payload) {
  const newMiscellaneous = Object.keys(payload.miscellaneous);
  const newConsumable = Object.keys(payload.consumable);
  const newEquipment = Object.keys(payload.equipment);
  const newCard = Object.keys(payload.card);
  const currentInventory = yield select(getAdventurerInventory);
  const currentMiscellaneous = Object.keys(currentInventory.miscellaneous);
  const currentConsumable = Object.keys(currentInventory.consumable);
  const currentEquipment = Object.keys(currentInventory.equipment);
  const currentCard = Object.keys(currentInventory.card);
  if (currentMiscellaneous.length !== newMiscellaneous.length) {
    yield put(updateInventory(payload));
    return;
  }
  if (currentConsumable.length !== newConsumable.length) {
    yield put(updateInventory(payload));
    return;
  }
  if (currentEquipment.length !== newEquipment.length) {
    yield put(updateInventory(payload));
    return;
  }
  if (currentCard.length !== newCard.length) {
    yield put(updateInventory(payload));
    return;
  }
  for (let i = 0; i < currentMiscellaneous.length; i++) {
    if (
      !payload.miscellaneous[currentMiscellaneous[i]] ||
      payload.miscellaneous[currentMiscellaneous[i]].amount !==
        currentInventory.miscellaneous[currentMiscellaneous[i]].amount
    ) {
      yield put(updateInventory(payload));
      return;
    }
  }
  for (let i = 0; i < currentConsumable.length; i++) {
    if (
      !payload.consumable[currentConsumable[i]] ||
      payload.consumable[currentConsumable[i]].amount !==
        currentInventory.consumable[currentConsumable[i]].amount
    ) {
      yield put(updateInventory(payload));
      return;
    }
  }
  for (let i = 0; i < currentEquipment.length; i++) {
    if (
      !payload.equipment[currentEquipment[i]] ||
      payload.equipment[currentEquipment[i]].amount !==
        currentInventory.equipment[currentEquipment[i]].amount
    ) {
      yield put(updateInventory(payload));
      return;
    }
  }
  for (let i = 0; i < currentCard.length; i++) {
    if (
      !payload.card[currentCard[i]] ||
      payload.card[currentCard[i]].amount !== currentInventory.card[currentCard[i]].amount
    ) {
      yield put(updateInventory(payload));
      return;
    }
  }
}

export function* checkAdventurerEquipmentUpdate(payload) {
  const currentEquipment = yield select(getAdventurerEquipment);
  const currentEquipmentKeys = Object.keys(currentEquipment);

  for (let i = 0; i < currentEquipmentKeys.length; i++) {
    const currentEquipmentPosition = currentEquipmentKeys[i];
    if (currentEquipment[currentEquipmentPosition]._id !== payload[currentEquipmentPosition]._id) {
      yield put(updateEquipment(payload));
      return;
    }
  }
}

export function* updateGameMetadata(payload) {
  const newAdventurer = payload.adventurer;
  const monsters = payload.monsters;

  // Call updations
  yield fork(checkTargetUpdate, newAdventurer.target);
  yield fork(checkAdventurerInfoUpdate, newAdventurer);
  yield fork(checkAdventurerInventoryUpdate, newAdventurer.inventory);
  yield fork(checkAdventurerEquipmentUpdate, newAdventurer.equipment);

  let shouldRedrawnMinimap = false;
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
  let monsterStatusUpdated = false;
  const oldVisibleMonsterStatus = yield select(getVisibleMonsters);
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
    if (
      !oldVisibleMonsterStatus[monstersIds[i]] ||
      oldVisibleMonsterStatus[monstersIds[i]].currentHealth !==
        monsters[monstersIds[i]].currentHealth
    ) {
      monsterStatusUpdated = true;
    }
  }
  if (
    visibleMonstersPositionsChanged ||
    monstersIds.length !== Object.keys(oldVisibleMonstersPositions).length
  ) {
    shouldRedrawnMinimap = true;
    yield put(visibleMonstersPositions(newVisibleMonstersPositions));
    yield put(visibleMonsters(monsters));
  } else if (monsterStatusUpdated) {
    yield put(visibleMonsters(monsters));
  }

  if (shouldRedrawnMinimap) {
    yield put(startDrawingMap());
  }
}

function* targetMonster(payload) {
  yield webSocket.emit(SOCKET_TARGET_MONSTER, payload);
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

function* watchTargetMonster() {
  while (true) {
    const { payload } = yield take(TARGET_MONSTER);
    yield fork(targetMonster, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchConnect),
    fork(watchFetchGameMap),
    fork(watchUpdateGameMetadata),
    fork(watchTargetMonster),
  ]);
}
