import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListAdventurers from '../elements/adventurer/ListAdventurers';
import ConfirmNewAdventurer from '../elements/adventurer/ConfirmNewAdventurer';

const SelectAdventurerContainer = () => {
  // const dispatch = useDispatch();
  const [showAdventurerCreation, setShowAdventurerCreation] = useState(false);

  const confirmAdventurerCreation = e => {
    e.preventDefault();
    setShowAdventurerCreation(true);
  }

  const closeAdventurerCreation = e => {
    e.preventDefault();
    setShowAdventurerCreation(false);
  }

  const createAdventurer = e => {
    e.preventDefault();
    setShowAdventurerCreation(false);
    console.log('Create an adventurer');
  }

  return (
    <>
      <ListAdventurers createAdventurer={confirmAdventurerCreation} />
      <ConfirmNewAdventurer
        showAdventurerCreation={showAdventurerCreation}
        handleClose={closeAdventurerCreation}
        handleConfirm={createAdventurer}
        handleCancel={closeAdventurerCreation}
      />
    </>
  );
};

export default SelectAdventurerContainer;
