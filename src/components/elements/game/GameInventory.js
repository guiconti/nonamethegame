import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Row from '../shared/Row';
import ItemContainer from '../../containers/game/ItemContainer';
import ItemMenu from '../../elements/game/ItemMenu';
import ItemDetails from '../../elements/game/ItemDetails';
import {
  USE_OPTION,
  EQUIP_OPTION,
  ATTACH_OPTION,
  DROP_OPTION,
  OPTIONS_PER_TYPE,
} from '../../../constants/inventory';
import { USE_ITEM, EQUIP_ITEM, ATTACH_CARD, DROP_ITEM } from '../../../constants/sockets';
import webSocket from '../../../webSocket';
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

  const onCloseItemMenu = e => {
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

  const onClickDynamicOptions = option => {
    setShowItemMenu(false);
    switch (option) {
      case USE_OPTION:
        webSocket.emit(USE_ITEM, itemData._id);
        break;
      case EQUIP_OPTION:
        webSocket.emit(EQUIP_ITEM, itemData._id);
        break;
      case ATTACH_OPTION:
        webSocket.emit(ATTACH_CARD, itemData._id);
        break;
      case DROP_OPTION:
        webSocket.emit(DROP_ITEM, itemData._id);
        break;
      default:
        break;
    }
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
        options={itemData ? OPTIONS_PER_TYPE[itemData.type] : []}
        top={topMenuPosition}
        left={leftMenuPosition}
        onClickSeeMore={openItemDetails}
        onClickDynamicOptions={onClickDynamicOptions}
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
