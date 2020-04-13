import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchConnect,
  connected,
  disconnected,
  updateGameMetadata,
} from '../../../actions/gameActions';
import webSocket from '../../../webSocket';
import { CONNECTED, GAME_METADATA, ADVENTURER_MOVE } from '../../../constants/sockets';
import {
  MOVEMENT_KEYCODES,
  ARROW_UP,
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
} from '../../../constants/keyCodes';
import { UP, DOWN, LEFT, RIGHT } from '../../../constants/movements';

const GameContainer = () => {
  const dispatch = useDispatch();

  const handleKeyDown = e => {
    if (MOVEMENT_KEYCODES.includes(e.keyCode)) {
      e.preventDefault();
      switch (e.keyCode) {
        case ARROW_UP:
          webSocket.emit(ADVENTURER_MOVE, UP);
          break;
        case ARROW_DOWN:
          webSocket.emit(ADVENTURER_MOVE, DOWN);
          break;
        case ARROW_LEFT:
          webSocket.emit(ADVENTURER_MOVE, LEFT);
          break;
        case ARROW_RIGHT:
          webSocket.emit(ADVENTURER_MOVE, RIGHT);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(fetchConnect());

    //  Websocket events
    webSocket.on(CONNECTED, () => {
      dispatch(connected());
    });
    webSocket.on(GAME_METADATA, metadata => {
      dispatch(updateGameMetadata(metadata));
    });

    //  Keys presses events
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      webSocket.close();
      dispatch(disconnected());
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <></>;
};

export default GameContainer;
