import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import './styles/selectAdventurer.scss';

const SelectAdventurer = () => {
  return (
    <Grid item align="center" xs={12} sm={6} md={3}>
      <Card className="select-adventurer__card">
        This card will contain a created adventurer.
      </Card>
    </Grid>
  );
};

export default SelectAdventurer;
