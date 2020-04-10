import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Column from '../shared/Column';
import Item from '../shared/Item';
import HealthBar from './HealthBar';
import './styles/monstersListItem.scss';

const MonstersListItem = ({ monster, monsterId, onMonsterSelect, selected }) => {
  return (
    <Column
      className={clsx('monster-list-item', { 'monster-list-item--selected': selected })}
      onClick={() => onMonsterSelect(monsterId)}
    >
      <Item>
        {monster.name}
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
