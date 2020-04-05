import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../redux/actions/message.actions';

const MessagesPage = (props) => {
  const { messages, actions } = props;

  return (
    <>
      <h2>Messages</h2>
      {messages.map((message) => (
        <div key={message.text}>{message.text}</div>
      ))}
    </>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  actions: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
