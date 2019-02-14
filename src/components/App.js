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
          <h1>Flickr Photo Stream</h1>
          <a
            className="App-link"
            href="https://github.com/ajpwilson/volleyball"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </header>

        <Api />

      </div>
    );
  }
}

export default App;
