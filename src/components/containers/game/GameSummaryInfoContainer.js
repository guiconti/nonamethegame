import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameSummaryInfo from '../../elements/game/GameSummaryInfo';
import { fetchAdventurerInfo } from '../../../actions/adventurerActions';
import {
  getAdventurerName,
  getAdventurerLevel,
  getAdventurerExperience,
  getAdventurerHealth,
  getAdventurerCurrentHealth,
  getAdventurerMana,
  getAdventurerCurrentMana,
  getAdventurerClass,
  getAdventurerRace,
} from '../../../reducers/selectors';

const GameSummaryInfoContainer = () => {
  const dispatch = useDispatch();
  const name = useSelector(getAdventurerName);
  const level = useSelector(getAdventurerLevel);
  const experience = useSelector(getAdventurerExperience);
  const health = useSelector(getAdventurerHealth);
  const currentHealth = useSelector(getAdventurerCurrentHealth);
  const mana = useSelector(getAdventurerMana);
  const currentMana = useSelector(getAdventurerCurrentMana);
  const _class = useSelector(getAdventurerClass);
  const race = useSelector(getAdventurerRace);

  useEffect(() => {
    dispatch(fetchAdventurerInfo());
  }, []);

  return (
    <>
      <GameSummaryInfo
        name={name}
        level={level}
        experience={experience}
        health={health}
        currentHealth={currentHealth}
        mana={mana}
        currentMana={currentMana}
        _class={_class}
        race={race}
      />
    </>
  );
};

export default GameSummaryInfoContainer;
