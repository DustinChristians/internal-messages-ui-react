import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../components/common/Spinner';
import * as messageActions from '../redux/actions/message.actions';
import TextEditList from '../components/TextEditList';
import TextInput from '../components/common/TextInput';
import Message from '../components/Messages/Message';

const MessagesPage = ({ messages, loadMessages, saveMessage, deleteMessage, loading }) => {
  const alert = useAlert();
  const { register, handleSubmit, watch, errors } = useForm();
  const newMessageValue = watch('newMessage');
  const [editedMessages, setEditedMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [saving, setSaving] = useState(false);
  const [apiErrors, setApiErrors] = useState({});

  useEffect(() => {
    if (messages.length === 0 && !loading) {
      loadMessages().then((loadedMessages) => {
        console.log('if', loadedMessages);
        setEditedMessages([loadedMessages]);
      });
    } else {
      console.log('else', messages);
      setEditedMessages(messages);
    }
  }, [loadMessages, messages, messages.length, loading]);

  function handleDelete(messageId) {
    const message = editedMessages.find(({ id }) => id === messageId);

    deleteMessage(message)
      .then(alert.success('Message deleted'))
      .catch((error) => {
        alert.error(error.message);
      });
  }

  function handleSave(messageId) {
    const message = editedMessages.find(({ id }) => id === messageId);
    setSaving(true);

    saveMessage(message)
      .then(alert.success('Message updated'))
      .catch((error) => {
        alert.error(error.message);
        setApiErrors({ onSave: error.message });
      })
      .finally(setSaving(false));
  }

  function handleNewChange(event) {
    const { value } = event.target;

    setNewMessage({ ...newMessage, text: value });
  }

  function handleNewSave() {
    setSaving(true);

    saveMessage(newMessage)
      .then(alert.success('Message created'))
      .catch((error) => {
        alert.error(error.message);
        setApiErrors({ onSave: error.message });
      })
      .finally(setSaving(false));
  }

  return (
    <div className="my-5 w-75 horizontal-center">
      <div className="chat-container">
        {editedMessages.map((item) => {
          return <Message message={item} />;
        })}
        <div className="form-group">
          <input className="form-control chat-input" type="text" name="chat" />
        </div>
      </div>
    </div>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  loadMessages: PropTypes.func.isRequired,
  saveMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages.map((message) => ({
      ...message,
    })),
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadMessages: messageActions.loadMessages,
  saveMessage: messageActions.saveMessage,
  deleteMessage: messageActions.deleteMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
