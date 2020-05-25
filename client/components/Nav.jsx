import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Transactions from '../components/Transactions';

class Nav extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul className="right">
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/transactions">Transaction</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/portfolio' component={ Portfolio } />
          <Route path='/transactions' component={ Transactions }/>
        </Switch>

      </Router>
    );
  }
}

export default Nav;
