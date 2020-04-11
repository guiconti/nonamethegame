import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { targetMonster } from '../../../actions/gameActions';
import { updateTarget } from '../../../actions/monsterActions';
import { getVisibleMonsters, getTarget } from '../../../reducers/selectors';
import MonstersList from '../../elements/monster/MonstersList';

const GameMonstersListContainer = () => {
  const dispatch = useDispatch();
  const visibleMonsters = useSelector(getVisibleMonsters);
  const target = useSelector(getTarget);
  const onMonsterSelect = monsterId => {
    if (monsterId === target) {
      dispatch(updateTarget(''));
      dispatch(targetMonster(''));
      return;
    }
    dispatch(updateTarget(monsterId));
    dispatch(targetMonster(monsterId));
  };

  useEffect(() => {
    const monsterIds = Object.keys(visibleMonsters);
    if (target && !monsterIds.includes(target)) {
      dispatch(targetMonster(target));
    }
  }, [visibleMonsters])

  return (
    <MonstersList
      monsters={visibleMonsters}
      onMonsterSelect={onMonsterSelect}
      selectedMonsterId={target}
    />
  );
};

export default GameMonstersListContainer;
