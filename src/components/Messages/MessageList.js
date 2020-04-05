import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const messageList = ({ messages }) => (
  <>
    {messages.map((message) => (
      <div key={message.id}>
        <div>
          User:
          {message.userId}
        </div>
        <div>
          Date:
          {message.createdOn}
        </div>
        <div>
          Channel:
          {message.channelId}
        </div>
        <Link to={`/message/ ${message.id}`}>
          <p>{message.text}</p>
        </Link>
      </div>
    ))}
  </>
);

messageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      text: PropTypes.string,
      channelId: PropTypes.number,
      createdOn: PropTypes.string,
    }),
  ).isRequired,
};

export default messageList;
