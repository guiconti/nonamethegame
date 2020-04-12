import { MESSAGE_RECEIVED } from '../types/battleLog';

export function messageReceived(payload) {
  return {
    type: MESSAGE_RECEIVED,
    payload,
  };
}
