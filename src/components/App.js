import React, { Component } from 'react';
// import SearchBar from './SearchBar';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5f0ca9ae5c0961037501f34373524d33&tags=dogs&per_page=10&format=json&nojsoncallback=1')
    .then(function(response) {
      return response.json();
    })
    .then(function(j) {
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })
      this.setState({ pictures: picArray });
    }.bind(this))
  }

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

        {this.state.pictures}

        {/* <SearchBar /> */}
      </div>
    );
  }
}

export default App;
