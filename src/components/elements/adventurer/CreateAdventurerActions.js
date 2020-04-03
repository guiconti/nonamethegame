import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import './styles/createAdventurerStepper.scss';

const CreateAdventurerActions = ({ handleNext, handleBack, isLastStep }) => {
  return (
    <Grid item xs={12} align="end">
      <Button className="button" onClick={handleBack}>
        Back
      </Button>
      {isLastStep ? (
        <Button className="button" variant="contained" color="primary">
          Finish
        </Button>
      ) : (
        <Button className="button" variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      )}
    </Grid>
  );
};

CreateAdventurerActions.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  isLastStep: PropTypes.bool.isRequired
};

export default CreateAdventurerActions;
