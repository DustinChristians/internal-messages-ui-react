import React from 'react';

const handleSubmit = (event) => {
  // prevent the browser's default behavior to reload
  event.preventDefault();
  alert('submit');
};

const MessagesPage = () => (
  <form onSubmit={handleSubmit}>
    <h2>Messages</h2>
    <h3>Add message</h3>
    <input type="text" />
    <input type="submit" value="Save" />
  </form>
);

export default MessagesPage;
