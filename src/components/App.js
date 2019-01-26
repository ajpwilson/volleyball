import React, { Component } from 'react';
import Api from './Api';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="http://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkout the repo.
          </a>
        </header>
        
        <Api />
      </div>
    );
  }
}

export default App;
