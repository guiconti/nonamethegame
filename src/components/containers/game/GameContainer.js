import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchConnect } from '../../../actions/gameActions';
import webSocket from '../../../webSocket';

const GameContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConnect());
  }, []);

  return (
    <></>
  );
};

export default GameContainer;
