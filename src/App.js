import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import MessagesPage from './components/Messages/MessagesPage';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Messages" component={MessagesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
