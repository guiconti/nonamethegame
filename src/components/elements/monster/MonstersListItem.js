import React from 'react';
import PropTypes from 'prop-types';
import Column from '../shared/Column';
import Item from '../shared/Item';
import HealthBar from './HealthBar';
import './styles/monstersListItem.scss';

const MonstersListItem = ({ monster, monsterId, onMonsterSelect, selected }) => {
  return (
    <Column className='monster-list-item' onClick={() => onMonsterSelect(monsterId)}>
      <Item>
        {monster.name} {selected ? ' - selected!' : ''}
      </Item>
      <Item>
        <HealthBar
          className='monster-list-item__health-bar'
          health={monster.health}
          currentHealth={monster.currentHealth}
        />
      </Item>
    </Column>
  );
};

MonstersListItem.propTypes = {
  monster: PropTypes.object,
  monsterId: PropTypes.string,
  onMonsterSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default MonstersListItem;
