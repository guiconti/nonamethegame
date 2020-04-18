import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAdventurerPointsToDistribute, getAdventurerAttributes } from '../../../reducers/selectors';
import AddPointsButton from '../../elements/adventurer/AddPointsButton';
import ConfirmationDialog from '../../elements/shared/ConfirmationDialog';
import AddAttributes from '../../elements/adventurer/AddAttributes';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import webSocket from '../../../webSocket';
import { ADD_POINTS } from '../../../constants/sockets';

const AddPointsContainer = () => {
  const pointsToDistribute = useSelector(getAdventurerPointsToDistribute);
  const attributes  = useSelector(getAdventurerAttributes);
  const [pointsLeft, setPointsLeft] = useState(pointsToDistribute);
  const [pointsAdded, setPointsAdded] = useState({
    strength: 0,
    intelligence: 0,
    agility: 0,
    dexterity: 0,
    vitality: 0,
  });
  const [showAddPoints, setShowAddPoints] = useState(false);
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setPointsLeft(pointsToDistribute);
    setPointsAdded({
      strength: 0,
      intelligence: 0,
      agility: 0,
      dexterity: 0,
      vitality: 0,
    })
  }, [pointsToDistribute])

  const openAddPoints = () => {
    setShowAddPoints(true);
  };

  const closeAddPoints = () => {
    setShowAddPoints(false);
  };

  const addPoints = () => {
    webSocket.emit(ADD_POINTS, pointsAdded);
    setShowAddPoints(false);
  }

  const reduceAttribute = attribute => {
    if (pointsLeft < pointsToDistribute) {
      const newPoints = { ...pointsAdded };
      newPoints[attribute]--;
      setPointsLeft(pointsLeft + 1);
      setPointsAdded({ ...newPoints });
    }
  };

  const increaseAttribute = attribute => {
    if (pointsLeft > 0) {
      const newPoints = { ...pointsAdded };
      newPoints[attribute]++;
      setPointsLeft(pointsLeft - 1);
      setPointsAdded({ ...newPoints });
    }
  };

  return (
    <>
      {pointsToDistribute > 0 ? <AddPointsButton onClick={openAddPoints} /> : <></>}
      <ConfirmationDialog
        show={showAddPoints}
        handleClose={closeAddPoints}
        fullScreen={belowSm}
        title='Add points'
        confirmText='Apply'
        cancelText='Cancel'
        handleConfirm={addPoints}
        handleCancel={closeAddPoints}
      >
        <AddAttributes
          pointsLeft={pointsLeft}
          attributes={attributes}
          pointsAdded={pointsAdded}
          reduceAttribute={reduceAttribute}
          increaseAttribute={increaseAttribute}
        />
      </ConfirmationDialog>
    </>
  );
};

export default AddPointsContainer;
