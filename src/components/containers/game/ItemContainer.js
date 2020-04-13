import React from 'react';
import PropTypes from 'prop-types';
import {  useSelector } from 'react-redux';
import { getItems } from '../../../reducers/selectors';
import Item from '../../elements/game/Item';

const ItemContainer = ({ itemId, amount }) => {
  const items = useSelector(getItems);

  return (
    <Item name={items[itemId].name} amount={amount} />
  );
};

ItemContainer.propTypes = {
  itemId: PropTypes.string.isRequired,
  amount: PropTypes.number,
};

export default ItemContainer;
