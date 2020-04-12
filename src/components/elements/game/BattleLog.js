import React from 'react';
import PropTypes from 'prop-types';
import MessagesList from '../shared/MessagesList';
import './styles/battleLog.scss';

const BattleLog = ({ messages }) => {
  return (
    <div className='battle-log'>
      <MessagesList messages={messages} />
    </div>
  );
};

BattleLog.propTypes = {
  messages: PropTypes.array,
};

export default BattleLog;
