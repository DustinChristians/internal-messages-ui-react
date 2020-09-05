import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  function handleClick() {
    console.log('handleClick');
  }

  return (
    <>
      <div className="jumbotron bg-transparent text-center">
        <h1>Instant Chat</h1>
        <p>Free conversations. Invite anyone. No sign up required.</p>
      </div>
      <div className="d-flex justify-content-center">
        <Link
          className="m-3 p-3 btn btn-dark btn-lg"
          role="button"
          to="/messages"
          onClick={handleClick}
        >
          Start a Conversation
        </Link>
        <button className="m-3 p-3 btn btn-dark btn-lg" type="button" onClick={handleClick}>
          Join a Conversation
        </button>
      </div>
    </>
  );
};

export default HomePage;
