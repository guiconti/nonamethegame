import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getItems } from '../../../reducers/selectors';
import Item from '../../elements/game/Item';
import ItemMenu from '../../elements/game/ItemMenu';

const ItemContainer = ({ itemId, amount }) => {
  const items = useSelector(getItems);
  const [showMenu, setShowMenu] = useState(false);
  const [topMenuPosition, setTopMenuPosition] = useState(0);
  const [leftMenuPosition, setLeftMenuPosition] = useState(0);

  const onItemLeftClick = e => {
    e.preventDefault();
    setTopMenuPosition(e.pageY);
    setLeftMenuPosition(e.pageX);
    setShowMenu(!showMenu);
  };

  const onCloseItemMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <Item name={items[itemId].name} amount={amount} onContextMenu={onItemLeftClick} />
      <ItemMenu
        active={showMenu}
        options={items.options}
        top={topMenuPosition}
        left={leftMenuPosition}
        onCloseItemMenu={onCloseItemMenu}
      />
    </>
  );
};

ItemContainer.propTypes = {
  itemId: PropTypes.string.isRequired,
  amount: PropTypes.number,
};

export default ItemContainer;
