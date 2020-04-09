import React from 'react';
import PropTypes from 'prop-types';
import Row from '../shared/Row';
import Column from '../shared/Column';
import Item from '../shared/Item';
import Avatar from '../shared/Avatar';
import { CLASS_ICONS } from '../../../constants/adventurer';
import './styles/gameSummaryInfo.scss';

const GameSummaryInfo = ({
  name,
  level,
  experience,
  health,
  currentHealth,
  mana,
  currentMana,
  _class
}) => {
  const ClassIconComponent = CLASS_ICONS[_class] ? CLASS_ICONS[_class] : undefined;
  return (
    <Row justifyContent="start" alignItems="center">
      <Item xs={3} md={2}>
        <Column alignItems="center">
          <Item>
            <Avatar className="game-summary-info__class-avatar" outlined extraLarge>
              <ClassIconComponent />
            </Avatar>
          </Item>
          <Item>
            { _class }
          </Item>
        </Column>
      </Item>
      <Item xs={7} md={8}>
        <Column>
          <Item>
            Lv { level }  {name}
          </Item>
          <Item>
            HP { currentHealth }/{ health }
          </Item>
          <Item>
            SP { currentMana }/{ mana }
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
  health: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  mana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  _class: PropTypes.string.isRequired
};

export default GameSummaryInfo;
