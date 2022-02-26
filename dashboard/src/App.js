import { withRouter } from 'react-router-dom';
import Routes from './routes.js';
import React, { Component, Fragment } from 'react';
import './App.css';
import Sidebar from './nav/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Fragment>
            <Sidebar/>
            <Routes/>
          </Fragment>
        </header>
      </div>
    )
  }
}

export default withRouter(App);
