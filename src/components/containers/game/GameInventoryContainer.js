import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsList } from '../../../actions/itemActions';
import { getLoadingItems, getAdventurerInventory } from '../../../reducers/selectors';
import GameInventory from '../../elements/game/GameInventory';
import { CATEGORIES, CONSUMABLE } from '../../../constants/inventory';

const GameInventoryContainer = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(CONSUMABLE);
  const loading = useSelector(getLoadingItems);
  const inventory = useSelector(getAdventurerInventory);

  const onSelectedCategory = category => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    dispatch(fetchItemsList());
  }, []);

  return (
    <>
      {loading || !inventory ? (
        <> </>
      ) : (
        <GameInventory
          inventory={inventory}
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectedCategory}
        />
      )}
    </>
  );
};

export default GameInventoryContainer;
