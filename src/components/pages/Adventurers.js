import React from 'react';
import Header from '../elements/shared/Header';
import SelectAdventurerContainer from '../containers/adventurer/SelectAdventurerContainer';
import './styles/adventurers.scss';

const Adventurers = () => {
  return (
    <div className="adventurers">
      <Header className="adventurers__header">Adventurers</Header>
      <SelectAdventurerContainer />
    </div>
  );
};

export default Adventurers;
