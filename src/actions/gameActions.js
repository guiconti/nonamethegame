import {
  LOADING,
  FETCH_CONNECT,
  FETCH_GAME_MAP,
  MAP_INFO,
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

export function fetchGameMap() {
  return {
    type: FETCH_GAME_MAP
  };
}

export function mapInfo(payload) {
  return {
    type: MAP_INFO,
    payload,
  };
}
