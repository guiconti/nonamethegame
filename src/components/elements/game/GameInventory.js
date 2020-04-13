import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Row from '../shared/Row';
import ItemContainer from '../../containers/game/ItemContainer';
import ItemMenu from '../../elements/game/ItemMenu';
import ItemDetails from '../../elements/game/ItemDetails';
import './styles/gameInventory.scss';

const GameInventory = ({ inventory, categories, selectedCategory, onSelectCategory }) => {
  const [itemData, setItemData] = useState(null);
  const [showItemMenu, setShowItemMenu] = useState(false);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [topMenuPosition, setTopMenuPosition] = useState(0);
  const [leftMenuPosition, setLeftMenuPosition] = useState(0);

  const openItemMenu = (e, item) => {
    e.preventDefault();
    setTopMenuPosition(e.pageY);
    setLeftMenuPosition(e.pageX);
    setItemData(item);
    setShowItemMenu(!showItemMenu);
  };

  const onCloseItemMenu = (e) => {
    e.preventDefault();
    setShowItemMenu(false);
  };

  const openItemDetails = () => {
    setShowItemMenu(false);
    setShowItemDetails(true);
  };

  const closeItemDetails = () => {
    setShowItemDetails(false);
  };

  return (
    <div className='inventory'>
      <Row justifyContent='space-between'>
        {categories.map(category => (
          <a
            key={category}
            className={clsx('inventory__category', {
              'inventory__category--active': category === selectedCategory,
            })}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </a>
        ))}
      </Row>
      <Row className='inventory__items'>
        {inventory &&
          Object.keys(inventory[selectedCategory.toLowerCase()]).map(itemId => (
            <ItemContainer
              key={itemId}
              itemId={itemId}
              amount={inventory[selectedCategory.toLowerCase()][itemId].amount}
              openItemMenu={openItemMenu}
            />
          ))}
      </Row>
      <ItemMenu
        active={showItemMenu}
        options={itemData ? itemData.options : []}
        top={topMenuPosition}
        left={leftMenuPosition}
        onClickSeeMore={openItemDetails}
        onCloseItemMenu={onCloseItemMenu}
      />
      <ItemDetails
        show={showItemDetails}
        name={itemData ? itemData.name : null}
        description={itemData ? itemData.description : null}
        value={itemData ? itemData.value : null}
        weight={itemData ? itemData.weight : null}
        handleClose={closeItemDetails}
      />
    </div>
  );
};

GameInventory.propTypes = {
  inventory: PropTypes.object,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string,
  onSelectCategory: PropTypes.func,
};

export default GameInventory;
