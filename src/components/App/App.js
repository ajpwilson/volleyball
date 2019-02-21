import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/header';
import SearchBar from '../search-bar/search-bar';
import ImageList from '../image-list/image-list';
import './app.css';

// I've created an axios instance with the url and default params set so I can just reference the code.
const axiosInstance = axios.create({
  baseURL: 'https://api.flickr.com/services/rest/',
  params: {
    api_key: '5e263bab53c7c3bfc9350ef4256a1ae7',
    method: 'flickr.photos.search',
    safe_search: 1,
    format: 'json',
    nojsoncallback: 1,
    extras: 'description,owner_name,tags,url_o,url_z'
  }
});

class App extends Component {
  state = {
    searchTerm: '',
    perPage: 20,
    items: []
  };

  // When the search is updated onChange, the new value is set in the state.
  updateSearchTerm = ({ target: { value } }) =>
    this.setState({ searchTerm: value });

  // Same as above but related to number of items being pulled through.
  updatePerPage = ({ target: { value } }) => this.setState({ perPage: value });

  // Returning a promise using async, this fuction is setting variables to state, Eventually I want to do this in redux.
  fetchPhotos = async () => {
    const { searchTerm, perPage } = this.state;

    // Creating the parameter objects from the input.
    const params = {
      text: searchTerm,
      per_page: perPage
    };

    // Using the axios instance with default params as to not to use unnecessary code by repeating myself.
    const { data } = await axiosInstance({ params });
    // Pulling out photos array from response and setting them to state
    this.setState({ items: data.photos.photo });
  };

  render() {
    const { updateSearchTerm, updatePerPage, fetchPhotos } = this;
    const { items, searchTerm, perPage } = this.state;

    return (
      <div className="App">

        <Header />
        <SearchBar
          searchTerm={searchTerm}
          updateSearchTerm={updateSearchTerm}
          perPage={perPage}
          updatePerPage={updatePerPage}
          fetchPhotos={fetchPhotos}
        />
        <ImageList items={items} />

      </div>
    );
  }
}

export default App;
