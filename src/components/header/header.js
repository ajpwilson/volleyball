import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <h1>Flickr Photo Stream</h1>
        <a
          className="App-link"
          href='https://github.com/ajpwilson/volleyball'
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
      </header>
    )
  }
}


export default Header;