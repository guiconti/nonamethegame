import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CreateAdventurer from './CreateAdventurer';
import './styles/listAdventurers.scss';

const ListAdventurers = () => {
  return (
    <Grid container justify="center" className="root">
      <CreateAdventurer />
      <CreateAdventurer />
      <CreateAdventurer />
      <CreateAdventurer />
      <CreateAdventurer />
      <CreateAdventurer />
    </Grid>
  );
};

export default ListAdventurers;
