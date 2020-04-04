import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameMap } from '../../../actions/gameActions';
import { getGameMap } from '../../../reducers/selectors';

const GameMapContainer = () => {
  const dispatch = useDispatch();
  const map = useSelector(getGameMap);

  useEffect(() => {
    dispatch(fetchGameMap());
  }, []);

  return <></>;
};

export default GameMapContainer;
