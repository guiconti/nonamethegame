import React from 'react';
import PropTypes from 'prop-types';
import './styles/message.scss';

const Message = ({ content, html }) => {
  return (
    <div className='message' dangerouslySetInnerHTML={{ __html: html }}>
      {content}
    </div>
  );
};

Message.propTypes = {
  content: PropTypes.string,
  html: PropTypes.string,
};

export default Message;
