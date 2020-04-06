import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchConnect,
  connected,
  disconnected,
  updateGameMetadata,
} from '../../../actions/gameActions';
import webSocket from '../../../webSocket';
import { CONNECTED, GAME_METADATA } from '../../../constants/sockets';

const GameContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConnect());
    webSocket.on(CONNECTED, () => {
      dispatch(connected());
    });
    webSocket.on(GAME_METADATA, (metadata) => {
      dispatch(updateGameMetadata(metadata));
    });
    return () => {
      webSocket.close();
      dispatch(disconnected());
    };
  }, []);

  return <></>;
};

export default GameContainer;
