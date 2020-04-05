import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../redux/actions/message.actions';
import * as userActions from '../../redux/actions/user.actions';
import MessageList from './MessageList';

const MessagesPage = ({ messages, users, actions }) => {
  useEffect(() => {
    if (messages.length === 0) {
      actions.loadMessages().catch((error) => {
        alert(`Loading messages failed ${error}`);
      });
    }

    if (users.length === 0) {
      actions.loadUsers().catch((error) => {
        alert(`Loading users failed ${error}`);
      });
    }
  }, [actions, messages.length, users.length]);

  return (
    <>
      <h2>Messages</h2>
      <MessageList messages={messages} />
    </>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  users: PropTypes.instanceOf(Array).isRequired,
  actions: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps(state) {
  return {
    messages:
      state.users.length === 0
        ? []
        : state.messages.map((message) => ({
            ...message,
            userName: state.users.find((user) => user.id === message.userId).firstName,
          })),
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMessages: bindActionCreators(messageActions.loadMessages, dispatch),
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
