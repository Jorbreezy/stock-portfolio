import React, { Component } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Transactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <Router>
        <h1> Transactions </h1>
        <hr />
      </Router>
    );
  }
}

export default Transactions;
