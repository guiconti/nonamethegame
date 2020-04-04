import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import SelectAdventurer from './SelectAdventurer';
import CreateAdventurer from './CreateAdventurer';
import './styles/listAdventurers.scss';

const ListAdventurers = ({ adventurers, createAdventurer }) => {
  return (
    <Grid container justify="center" className="list-adventurers">
      {adventurers.map((adventurer) => (
        <SelectAdventurer
          key={adventurer._id}
          _id={adventurer._id}
          name={adventurer.name}
          level={adventurer.level}
          _class={adventurer.class}
          race={adventurer.race}
        />
      ))}
      <CreateAdventurer createAdventurer={createAdventurer} />
    </Grid>
  );
};

ListAdventurers.propTypes = {
  adventurers: PropTypes.array.isRequired,
  createAdventurer: PropTypes.func.isRequired,
};

export default ListAdventurers;
