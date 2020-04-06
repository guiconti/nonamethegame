import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchConnect } from '../../../actions/gameActions';
import webSocket from '../../../webSocket';
import { CONNECTED } from '../../../constants/sockets';

const GameContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConnect());
    webSocket.on(CONNECTED, () => {
      //  TODO: Update redux to set a connected state
    });
    return () => {
      webSocket.close();
    }
  }, []);

  return (
    <></>
  );
};

export default GameContainer;
