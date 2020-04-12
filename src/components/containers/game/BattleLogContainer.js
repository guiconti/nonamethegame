import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBattleLogMessages } from '../../../reducers/selectors';
import { messageReceived } from '../../../actions/battleLogActions';
import BattleLog from '../../elements/game/BattleLog';
import webSocket from '../../../webSocket';
import { BATTLE_LOG_MESSAGE } from '../../../constants/sockets';

const BattleLogContainer = () => {
  const dispatch = useDispatch();
  const messages = useSelector(getBattleLogMessages);

  useEffect(() => {
    webSocket.on(BATTLE_LOG_MESSAGE, message => {
      dispatch(messageReceived(message));
    });
  }, []);

  return <BattleLog messages={messages} />;
};

export default BattleLogContainer;
