import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleMonsters } from '../../../reducers/selectors';
import MonstersList from '../../elements/monster/MonstersList';

const GameMonstersListContainer = () => {
  // const dispatch = useDispatch();
  const visibleMonsters = useSelector(getVisibleMonsters);
  const [selectedMonsterId, setSelectedMonsterId] = useState('');
  const onMonsterSelect = monsterId => {
    if (monsterId === selectedMonsterId) {
      setSelectedMonsterId('');
      return;
    }
    setSelectedMonsterId(monsterId);
  };

  useEffect(() => {
    const monsterIds = Object.keys(visibleMonsters);
    if (!monsterIds.includes(selectedMonsterId)) {
      setSelectedMonsterId('');
    }
  }, [visibleMonsters])

  return (
    <MonstersList
      monsters={visibleMonsters}
      onMonsterSelect={onMonsterSelect}
      selectedMonsterId={selectedMonsterId}
    />
  );
};

export default GameMonstersListContainer;
