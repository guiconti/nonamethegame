import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../elements/shared/Header';
import SelectAdventurerContainer from '../containers/SelectAdventurerContainer';

const Adventurers = () => {
  return (
    <Container>
      <Header>Adventurers</Header>
      <SelectAdventurerContainer />
    </Container>
  );
};

export default Adventurers;
