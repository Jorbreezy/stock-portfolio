import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from '../components/Nav';

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Nav />
      </Router>
    );
  }
}

export default Dashboard;
