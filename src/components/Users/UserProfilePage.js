import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../redux/actions/message.actions';
import * as userActions from '../../redux/actions/user.actions';

const UserProfilePage = ({ users, actions }) => {
  useEffect(() => {
    if (users.length === 0) {
      actions.loadUsers().catch((error) => {
        alert(`Loading user failed ${error}`);
      });
    }
  }, [actions, users.length]);

  return (
    <>
      <h2>User Profile</h2>
      <MessageList messages={messages} />
    </>
  );
};

NewUserPage.propTypes = {
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
    user: state.users.find((user) => user.id === ).firstName,
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

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage);
