import React from 'react';
import PropTypes from 'prop-types';
import Row from '../shared/Row';
import Column from '../shared/Column';
import Item from '../shared/Item';
import Avatar from '../shared/Avatar';
import HealthBar from '../adventurer/HealthBar';
import ManaBar from '../adventurer/ManaBar';
import ExpBar from '../adventurer/ExpBar';
import { CLASS_ICONS } from '../../../constants/adventurer';
import './styles/gameSummaryInfo.scss';

const GameSummaryInfo = ({
  name,
  level,
  experience,
  experienceToNextLevel,
  health,
  currentHealth,
  mana,
  currentMana,
  _class,
}) => {
  const ClassIconComponent = CLASS_ICONS[_class] ? CLASS_ICONS[_class] : undefined;
  return (
    <Row justifyContent='flex-start' alignItems='stretch'>
      <Item xs={3} md={2}>
        <Column>
          <Item>
            <Avatar className='game-summary-info__class-avatar' outlined extraLarge>
              <ClassIconComponent />
            </Avatar>
          </Item>
          <Item className='game-summary-info__class-name'>{_class}</Item>
        </Column>
      </Item>
      <Item xs={7} md={8}>
        <Column justifyContent='space-between'>
          <Item>
            Lv {level} {name}
          </Item>
          <Item>
            <Row>
              <Item className="game-summary-info__progress-label">HP</Item>
              <Item>
                <HealthBar health={health} currentHealth={currentHealth} />
              </Item>
            </Row>
          </Item>
          <Item>
            <Row>
              <Item className="game-summary-info__progress-label">SP</Item>
              <Item>
                <ManaBar mana={mana} currentMana={currentMana} />
              </Item>
            </Row>
          </Item>
          <Item>
            <Row>
              <Item className="game-summary-info__progress-label">EXP</Item>
              <Item>
                <ExpBar experienceToNextLevel={experienceToNextLevel} experience={experience} />
              </Item>
            </Row>
          </Item>
        </Column>
      </Item>
    </Row>
  );
};

GameSummaryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  experienceToNextLevel: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  mana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  _class: PropTypes.string.isRequired,
};

export default GameSummaryInfo;
