import React from 'react';
import PropTypes from 'prop-types';
import Container from '../shared/Container';
import Row from '../shared/Row';
import Item from '../shared/Item';
import SelectAdventurer from './SelectAdventurer';
import CreateAdventurer from './CreateAdventurer';
import './styles/listAdventurers.scss';

const ListAdventurers = ({ adventurers, selectAdventurer, createAdventurer }) => {
  return (
    <Container>
      <Row justifyContent="center">
        {adventurers.map((adventurer) => (
          <Item key={adventurer._id} xs={12} sm={6} md={3} className="list-adventurers--card">
            <SelectAdventurer
              _id={adventurer._id}
              name={adventurer.name}
              level={adventurer.level}
              _class={adventurer.class}
              race={adventurer.race}
              selectAdventurer={selectAdventurer}
            />
          </Item>
        ))}
        <Item xs={12} sm={6} md={3} className="list-adventurers--card">
          <CreateAdventurer createAdventurer={createAdventurer} />
        </Item>
      </Row>
    </Container>
  );
};

ListAdventurers.propTypes = {
  adventurers: PropTypes.array.isRequired,
  selectAdventurer: PropTypes.func.isRequired,
  createAdventurer: PropTypes.func.isRequired,
};

export default ListAdventurers;
