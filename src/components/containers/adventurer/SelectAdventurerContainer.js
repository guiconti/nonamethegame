import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIcon from '../../elements/shared/LoadingIcon';
import ListAdventurers from '../../elements/adventurer/ListAdventurers';
import ConfirmNewAdventurer from '../../elements/adventurer/ConfirmNewAdventurer';
import { fetchListAdventurers, fetchSelectAdventurer, newAdventurer } from '../../../actions/adventurerActions';
import { getAdventurerListLoading, getAdventurers } from '../../../reducers/selectors';

const SelectAdventurerContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getAdventurerListLoading);
  const adventurers = useSelector(getAdventurers);
  const [showAdventurerCreation, setShowAdventurerCreation] = useState(false);

  useEffect(() => {
    dispatch(fetchListAdventurers());
  }, []);

  const selectAdventurer = id => {
    dispatch(fetchSelectAdventurer({ id }));
  };

  const confirmAdventurerCreation = () => {
    setShowAdventurerCreation(true);
  };

  const closeAdventurerCreation = () => {
    setShowAdventurerCreation(false);
  };

  const createAdventurer = () => {
    setShowAdventurerCreation(false);
    dispatch(newAdventurer());
  };

  return (
    <>
      {loading ? (
        <LoadingIcon large />
      ) : (
        <>
          <ListAdventurers
            adventurers={adventurers}
            createAdventurer={confirmAdventurerCreation}
            selectAdventurer={selectAdventurer}
          />
          <ConfirmNewAdventurer
            showAdventurerCreation={showAdventurerCreation}
            handleClose={closeAdventurerCreation}
            handleConfirm={createAdventurer}
            handleCancel={closeAdventurerCreation}
          />
        </>
      )}
    </>
  );
};

export default SelectAdventurerContainer;
