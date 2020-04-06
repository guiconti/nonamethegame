import {
  LOADING,
  CONNECTED,
  DISCONNECTED,
  FETCH_CONNECT,
  FETCH_GAME_MAP,
  MAP_INFO,
  STOP_DRAWING_MAP,
  START_DRAWING_MAP,
  UPDATE_GAME_METADATA
} from '../types/game';

export function loading() {
  return {
    type: LOADING
  };
}

export function fetchConnect() {
  return {
    type: FETCH_CONNECT
  };
}

export function connected() {
  return {
    type: CONNECTED,
  };
}

export function disconnected() {
  return {
    type: DISCONNECTED,
  };
}

export function fetchGameMap() {
  return {
    type: FETCH_GAME_MAP
  };
}

export function stopDrawingMap() {
  return {
    type: STOP_DRAWING_MAP
  };
}

export function startDrawingMap() {
  return {
    type: START_DRAWING_MAP
  };
}

export function mapInfo(payload) {
  return {
    type: MAP_INFO,
    payload,
  };
}

export function updateGameMetadata(payload) {
  return {
    type: UPDATE_GAME_METADATA,
    payload,
  };
}