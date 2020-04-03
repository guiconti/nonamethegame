import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../elements/shared/Header';
import CreateAdventurerContainer from '../containers/adventurer/CreateAdventurerContainer';

const NewAdventurer = () => {
  return (
    <Container>
      <Header>Create your new adventurer</Header>
      <CreateAdventurerContainer />
    </Container>
  );
};

export default NewAdventurer;
