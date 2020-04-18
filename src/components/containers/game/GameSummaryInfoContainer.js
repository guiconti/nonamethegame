import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameSummaryInfo from '../../elements/game/GameSummaryInfo';
import { fetchAdventurerInfo } from '../../../actions/adventurerActions';
import {
  getAdventurerLoading,
  getAdventurerName,
  getAdventurerLevel,
  getAdventurerExperience,
  getAdventurerExperienceToNextLevel,
  getAdventurerHealth,
  getAdventurerCurrentHealth,
  getAdventurerMana,
  getAdventurerCurrentMana,
  getAdventurerClass,
  getAdventurerRace,
} from '../../../reducers/selectors';

const GameSummaryInfoContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getAdventurerLoading);
  const name = useSelector(getAdventurerName);
  const level = useSelector(getAdventurerLevel);
  const experience = useSelector(getAdventurerExperience);
  const experienceToNextLevel = useSelector(getAdventurerExperienceToNextLevel);
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
      {loading ? (
        <> </>
      ) : (
        <GameSummaryInfo
          name={name}
          level={level}
          experience={experience}
          experienceToNextLevel={experienceToNextLevel}
          health={health}
          currentHealth={currentHealth}
          mana={mana}
          currentMana={currentMana}
          _class={_class}
          race={race}
        />
      )}
    </>
  );
};

export default GameSummaryInfoContainer;
