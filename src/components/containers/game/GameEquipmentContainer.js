import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAdventurerEquipment } from '../../../reducers/selectors';
import GameEquipment from '../../elements/game/GameEquipment';
import ItemMenu from '../../elements/game/ItemMenu';
import ItemDetails from '../../elements/game/ItemDetails';

const GameEquipmentContainer = () => {
  const equipment = useSelector(getAdventurerEquipment);
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

  return (
    <>
      <GameEquipment equipment={equipment} openItemMenu={openItemMenu} />
      <ItemMenu
        active={showItemMenu}
        options={[]}
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
    </>
  );
};

export default GameEquipmentContainer;
