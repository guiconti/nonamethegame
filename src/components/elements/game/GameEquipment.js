import React from 'react';
import PropTypes from 'prop-types';
import ItemContainer from '../../containers/game/ItemContainer';
import './styles/gameEquipment.scss';

const GameEquipment = ({ equipment, openItemMenu }) => {
  return (
    <div className='silhouette'>
      <div className='head'>
        {equipment.head._id ? (
          <ItemContainer itemId={equipment.head._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
      <div className='middle-head'>
        {equipment.middleHead._id ? (
          <ItemContainer itemId={equipment.middleHead._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
      <div className='shoulder'>
        {equipment.shoulder._id ? (
          <ItemContainer itemId={equipment.shoulder._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
      <div className='chest'>
        {equipment.chest._id ? (
          <ItemContainer itemId={equipment.chest._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
      <div className='rightHand'>
        {equipment.rightHand._id ? (
          <ItemContainer itemId={equipment.rightHand._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
      <div className='leftHand'>
        {equipment.leftHand._id ? (
          <ItemContainer itemId={equipment.leftHand._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
      <div className='feet'>
        {equipment.feet._id ? (
          <ItemContainer itemId={equipment.feet._id} amount={1} openItemMenu={openItemMenu} />
        ) : (
          'Empty'
        )}
      </div>
    </div>
  );
};

GameEquipment.propTypes = {
  equipment: PropTypes.object,
  openItemMenu: PropTypes.func,
};

export default GameEquipment;
