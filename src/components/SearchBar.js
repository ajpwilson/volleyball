import React, { Component } from "react";

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
          <label>
            <input
              type="text"
              value={searchTerm}
              onChange={updateSearchTerm}
              placeholder="Search..."
            />
          </label>
          <select value={perPage} onChange={updatePerPage}>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <input type="submit" value="Search" disabled={!searchTerm} />
        </form>
      </div>
    );
  }
}

export default SearchBar;