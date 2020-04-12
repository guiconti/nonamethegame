import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsList } from '../../../actions/itemActions';
import {
  getLoadingItems,
  getItems,
  getAdventurerInventory
} from '../../../reducers/selectors';

const GameInventoryContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingItems);
  const items = useSelector(getItems)
  const inventory = useSelector(getAdventurerInventory);
  const miscellaneous = Object.keys(inventory.miscellaneous);
  const consumable = Object.keys(inventory.consumable);
  const equipment = Object.keys(inventory.equipment);
  const card = Object.keys(inventory.card);

  useEffect(() => {
    dispatch(fetchItemsList());
  }, []);

  return (
    <>
      {loading || miscellaneous.length === 0 ? (
        <> </>
      ) : (
        <div> {items[miscellaneous[0]].name} </div>
      )}
    </>
  );
};

export default GameInventoryContainer;
