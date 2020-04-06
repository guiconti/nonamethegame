import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchConnect, connected, disconnected } from '../../../actions/gameActions';
import webSocket from '../../../webSocket';
import { CONNECTED } from '../../../constants/sockets';

const GameContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConnect());
    webSocket.on(CONNECTED, () => {
      dispatch(connected());
    });
    return () => {
      webSocket.close();
      dispatch(disconnected());
    }
  }, []);

  return (
    <></>
  );
};

export default GameContainer;
