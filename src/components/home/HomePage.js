import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron">
    <h1>The Messages App</h1>
    <p>Send messages to other people using this React application.</p>
    <Link to="login" className="btn btn-primary btn-lg">
      Login
    </Link>
  </div>
);

export default HomePage;
