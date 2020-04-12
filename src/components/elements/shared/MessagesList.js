import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from '../shared/Message';
import './styles/messagesList.scss';

const MessagesList = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className='messages'>
      {messages && messages.map((message, index) => <Message key={index} html={message} />)}
      <div ref={messagesEndRef} />
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.array,
};

export default MessagesList;
