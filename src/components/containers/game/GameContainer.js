import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchConnect } from '../../../actions/gameActions';

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
