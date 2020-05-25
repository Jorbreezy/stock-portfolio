import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <Router>
        <h1> Portfolio </h1>
        <hr />
      </Router>
    );
  }
}

export default Portfolio;
