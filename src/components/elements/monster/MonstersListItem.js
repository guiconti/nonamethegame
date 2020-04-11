import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Column from '../shared/Column';
import Row from '../shared/Row';
import Item from '../shared/Item';
import HealthBar from './HealthBar';
import MonsterTargetingIcon from '../../icons/MonsterTargetingIcon';
import './styles/monstersListItem.scss';

const MonstersListItem = ({ monster, monsterId, adventurerId, onMonsterSelect, selected }) => {
  return (
    <Column
      className={clsx('monster-list-item', { 'monster-list-item--selected': selected })}
      onClick={() => onMonsterSelect(monsterId)}
    >
      <Item>
        <Row justifyContent='flex-start' alignItems='center'>
          <Item>{monster.name}</Item>
          <Item className='monster-list-item--status'>
            {monster.actions.target === adventurerId ? <MonsterTargetingIcon extraSmall /> : ''}
          </Item>
        </Row>
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
  adventurerId: PropTypes.string,
  onMonsterSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default MonstersListItem;
