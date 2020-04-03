import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './styles/createAdventurer.scss';

const CreateAdventurer = ({ createAdventurer }) => {
  return (
    <Grid item align="center" xs={12} sm={6} md={3}>
      <Card className="create-adventurer__card" onClick={createAdventurer}>
        <CardContent className="create-adventurer__card-content">
          <AddCircleOutlineIcon className="create-adventurer__card-icon" />
          Create a new adventurer!
        </CardContent>
      </Card>
    </Grid>
  );
};

CreateAdventurer.propTypes = {
  createAdventurer: PropTypes.func.isRequired
};

export default CreateAdventurer;
