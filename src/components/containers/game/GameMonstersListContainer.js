import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getVisibleMonsters,
} from '../../../reducers/selectors';
import MonstersList from '../../elements/monster/MonstersList';

const GameMonstersListContainer = () => {
  // const dispatch = useDispatch();
  const visibleMonsters = useSelector(getVisibleMonsters);

  return <MonstersList monsters={visibleMonsters} />;
};

export default GameMonstersListContainer;
