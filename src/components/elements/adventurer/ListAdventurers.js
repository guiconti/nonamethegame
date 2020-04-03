import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import SelectAdventurer from './SelectAdventurer';
import CreateAdventurer from './CreateAdventurer';
import './styles/listAdventurers.scss';

const ListAdventurers = ({ createAdventurer }) => {
  return (
    <Grid container justify="center" className="list-adventurers">
      <SelectAdventurer />
      <SelectAdventurer />
      <SelectAdventurer />
      <CreateAdventurer createAdventurer={createAdventurer} />
    </Grid>
  );
};

ListAdventurers.propTypes = {
  createAdventurer: PropTypes.func.isRequired,
};

export default ListAdventurers;
