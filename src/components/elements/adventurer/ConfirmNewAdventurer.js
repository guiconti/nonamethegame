import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ConfirmationDialog from '../shared/ConfirmationDialog';

const ConfirmNewAdventurer = ({ showAdventurerCreation, handleClose, handleConfirm, handleCancel }) => {
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ConfirmationDialog
      show={showAdventurerCreation}
      handleClose={handleClose}
      fullScreen={belowSm}
      title="Create adventurer"
      confirmText="Yes!"
      cancelText="Not today"
      handleConfirm={handleConfirm}
      handleCancel={handleCancel}
    >
      <Typography variant="subtitle1" component="subtitle1">
        Are you sure you want to create a new adventurer?
      </Typography>
    </ConfirmationDialog>
  );
};

ConfirmNewAdventurer.propTypes = {
  showAdventurerCreation: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default ConfirmNewAdventurer;
