import React from 'react';
import Header from '../elements/shared/Header';
import CreateAdventurerContainer from '../containers/adventurer/CreateAdventurerContainer';

const NewAdventurer = () => {
  return (
    <>
      <Header>Create your new adventurer</Header>
      <CreateAdventurerContainer />
    </>
  );
};

export default NewAdventurer;
