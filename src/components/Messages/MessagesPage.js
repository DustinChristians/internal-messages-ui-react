import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createMessage from '../../redux/actions/messageActions';

const MessagesPage = (props) => {
  const { messages, dispatch } = props;

  const handleSubmit = (event) => {
    const message = { text: event.target.elements.message.value };

    // prevent the browser's default behavior to reload
    event.preventDefault();
    dispatch(createMessage(message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Messages</h2>
      <h3>Add message</h3>
      <input type="text" name="message" />
      <input type="submit" value="Save" />
      {messages.map((message) => (
        <div key={message.text}>{message.text}</div>
      ))}
    </form>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps)(MessagesPage);
