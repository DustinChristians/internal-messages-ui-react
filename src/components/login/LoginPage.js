import React from 'react';

const LoginPage = () => (
  <form className="form-signin">
    <div className="form-label-group">
      <label htmlFor="username">
        Username{' '}
        <input
          type="text"
          id="username"
          className="form-control"
          name="username"
          placeholder="Username"
          required
        />
      </label>
    </div>
    <div className="form-label-group">
      <label htmlFor="inputPassword">
        Password{' '}
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          required
        />
      </label>
    </div>

    <div className="custom-control custom-checkbox mb-3">
      <label className="custom-control-label" htmlFor="customCheck1">
        Remember password
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
      </label>
    </div>

    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
      Sign in
    </button>
  </form>
);

export default LoginPage;
