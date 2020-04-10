import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getVisibleMonsters,
} from '../../../reducers/selectors';
import GameMonstersList from '../../elements/game/GameMonstersList';

const GameMonstersListContainer = () => {
  // const dispatch = useDispatch();
  const visibleMonsters = useSelector(getVisibleMonsters);

  return <GameMonstersList monsters={visibleMonsters} />;
};

export default GameMonstersListContainer;
