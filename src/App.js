import React, { Component } from 'react';
import './App.css';
import AppWrapper from './components/Layout/AppWrapper';
import Purchase from './components/Purchase/purchase';

class App extends Component {
  render() {
    return (
      <AppWrapper className="container">
        <div className="row">
          <div className="col l6 m6 s12">
            <h1>Ryan Belke</h1>
            <h4>Portfolio and development projects</h4>
          </div>
          <div className="col l4 m6 s12">
            <img src="analytics.svg" alt="analytics icno" />
          </div>
        </div>
        <div className="row dataSection">
          <div className="col l3 m6 s12 offset-l1">
            <Purchase />
          </div>
          <div className="col l4 m6 s12 offset-l1">
            <h3>Data Forms & Submission</h3>
            <hr />
            <h4>Price Checker Simulation</h4>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
