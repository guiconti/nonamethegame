import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { targetMonster } from '../../../actions/gameActions';
import { getVisibleMonsters, getTarget, getAdventurerId } from '../../../reducers/selectors';
import MonstersList from '../../elements/monster/MonstersList';

const GameMonstersListContainer = () => {
  const dispatch = useDispatch();
  const visibleMonsters = useSelector(getVisibleMonsters);
  const target = useSelector(getTarget);
  const adventurerId = useSelector(getAdventurerId);
  const onMonsterSelect = monsterId => {
    if (monsterId === target) {
      dispatch(targetMonster(''));
      return;
    }
    dispatch(targetMonster(monsterId));
  };

  return (
    <MonstersList
      monsters={visibleMonsters}
      adventurerId={adventurerId}
      onMonsterSelect={onMonsterSelect}
      selectedMonsterId={target}
    />
  );
};

export default GameMonstersListContainer;
