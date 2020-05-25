import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from './dashboard';
import PrivateRoute from '../components/PrivateRoute';

class MainContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={ Login } />
          <Route exact path='/register' component={ Register } /> 

          <PrivateRoute exact path={['/portfolio', '/']} component={ Dashboard } />
        </Switch>
      </Router>
    );
  }
}

export default MainContainer;
