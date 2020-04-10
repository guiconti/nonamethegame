import React from 'react';
import PropTypes from 'prop-types';
import Column from '../shared/Column';
import Item from '../shared/Item';
import GameMonstersListItem from './GameMonstersListItem';
import './styles/gameMonstersList.scss';

const GameMonstersList = ({ monsters }) => {
  const monsterIds = Object.keys(monsters);
  return (
    <div className='monsters-list'>
      <Column className='monsters-list__column'>
        <Item>
          <div className='monsters-list__title'>Monsters</div>
        </Item>
        <Item className='monsters-list__flex-item'>
          <Column className='monsters-list__column monsters-list__monsters'>
            {monsterIds ? (
              monsterIds.map(monster => {
                return (
                  <Item key={monster}>
                    <GameMonstersListItem monster={monsters[monster]} />
                  </Item>
                );
              })
            ) : (
              <> </>
            )}
          </Column>
        </Item>
      </Column>
    </div>
  );
};

GameMonstersList.propTypes = {
  monsters: PropTypes.object,
};

export default GameMonstersList;
