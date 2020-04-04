import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ConfirmationDialog from '../shared/ConfirmationDialog';

const ConfirmAdventurerCreation = ({
  showAdventurerCreation,
  handleClose,
  handleConfirm,
  handleCancel,
  name,
  selectedClass,
  selectedRace,
  selectedGender,
  attributes,
  loading
}) => {
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ConfirmationDialog
      show={showAdventurerCreation}
      handleClose={handleClose}
      fullScreen={belowSm}
      title="Confirm your adventurer"
      confirmText="Yes!"
      cancelText="No, this sucks"
      handleConfirm={handleConfirm}
      handleCancel={handleCancel}
      loading={loading}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" component="h2">
            Name: {name}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Class: {selectedClass}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Race: {selectedRace}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Gender: {selectedGender}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {attributes &&
            Object.keys(attributes).map(currentAttribute => (
              <Typography key={currentAttribute} variant="subtitle1" component="h2">
                {currentAttribute}: {attributes[currentAttribute]}
              </Typography>
            ))
          }
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h2">
            Is this how you want your new adventurer?
          </Typography>
        </Grid>
      </Grid>
    </ConfirmationDialog>
  );
};

ConfirmAdventurerCreation.propTypes = {
  showAdventurerCreation: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedClass: PropTypes.string.isRequired,
  selectedRace: PropTypes.string.isRequired,
  selectedGender: PropTypes.string.isRequired,
  attributes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default ConfirmAdventurerCreation;
