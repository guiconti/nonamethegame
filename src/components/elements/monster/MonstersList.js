import React from 'react';
import PropTypes from 'prop-types';
import Column from '../shared/Column';
import Item from '../shared/Item';
import MonstersListItem from './MonstersListItem';
import './styles/monstersList.scss';

const GameMonstersList = ({ monsters, onMonsterSelect, selectedMonsterId }) => {
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
              monsterIds.map(monsterId => {
                return (
                  <Item key={monsterId}>
                    <MonstersListItem
                      monster={monsters[monsterId]}
                      monsterId={monsterId}
                      onMonsterSelect={onMonsterSelect}
                      selected={selectedMonsterId === monsterId}
                    />
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
  onMonsterSelect: PropTypes.func,
  selectedMonsterId: PropTypes.string,
};

export default GameMonstersList;
