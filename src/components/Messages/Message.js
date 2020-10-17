import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="d-flex justify-content-start">
        <p className="chat-name">{message.user}</p>
        <span className="chat-time">{message.datetime}</span>
      </div>
      <p>{message.text}</p>
      <hr />
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.string,
    datetime: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Message;
