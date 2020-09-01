import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  function handleClick() {
    console.log('handleClick');
  }

  return (
    <>
      <div className="jumbotron">
        <h1>Instant Chat</h1>
        <p>Free conversations. Invite anyone.</p>
      </div>

      <Link className="btn btn-pink" role="button" to="/messages" onClick={handleClick}>
        Start a Conversation
      </Link>
      <button className="btn btn-pink" type="button" onClick={handleClick}>
        Join a Conversation
      </button>
    </>
  );
};

export default HomePage;
