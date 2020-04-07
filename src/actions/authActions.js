import {
  SIGNED_IN,
  SIGNED_OUT,
  REGISTER_FETCH,
  SIGN_IN_FETCH,
  LOADING,
  LOADED,
  ERROR,
  CLEAR_ERROR
} from '../types/auth';

export function signedIn() {
  return {
    type: SIGNED_IN,
  };
}

export function signedOut() {
  return {
    type: SIGNED_OUT,
  };
}

export function fetchRegister(payload) {
  return {
    type: REGISTER_FETCH,
    payload,
  };
}

export function fetchSignIn(payload) {
  return {
    type: SIGN_IN_FETCH,
    payload,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function loaded() {
  return {
    type: LOADED,
  };
}

export function error(payload) {
  return {
    type: ERROR,
    payload,
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}
