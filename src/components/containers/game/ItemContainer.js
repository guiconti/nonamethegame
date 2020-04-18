import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getItems } from '../../../reducers/selectors';
import Item from '../../elements/game/Item';

const ItemContainer = ({ itemId, amount, openItemMenu }) => {
  const items = useSelector(getItems);
  return (
    <>
      {items[itemId] ? (
        <Item
          name={items[itemId].name}
          amount={amount}
          onContextMenu={e => openItemMenu(e, items[itemId])}
        />
      ) : (
        <></>
      )}
    </>
  );
};

ItemContainer.propTypes = {
  itemId: PropTypes.string.isRequired,
  amount: PropTypes.number,
  openItemMenu: PropTypes.func.isRequired,
};

export default ItemContainer;
