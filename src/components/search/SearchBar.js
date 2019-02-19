import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  // onSubmit cancel browser default and fetch some photos
  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchPhotos();
    console.log(this.props.fetchPhotos());
  };

  render() {
    const { searchTerm, updateSearchTerm, perPage, updatePerPage } = this.props;

    return (
      <div className="search-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search"
            type="text"
            value={searchTerm}
            onChange={updateSearchTerm}
            placeholder="Search..."
          />
          <select value={perPage} onChange={updatePerPage}>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <button
            className="btn"
            type="submit"
            disabled={!searchTerm}
          >
          Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;