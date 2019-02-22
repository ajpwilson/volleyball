import React, { Component } from 'react';
import styles from './search-bar.module.css';

class SearchBar extends Component {

  // onSubmit cancel browser default and fetch requested photos.
  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchPhotos();
  };

  render() {
    const { searchTerm, updateSearchTerm, perPage, updatePerPage } = this.props;

    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.search}
            type="text"
            value={searchTerm}
            onChange={updateSearchTerm}
            placeholder="Search..."
          />
          <select value={perPage} onChange={updatePerPage}>
            {[20, 50, 100].map(option =>
              <option key={`option-${option}`} value={option}>
                show {option} results
              </option>
            )}
          </select>
          <button
            className={styles.btn}
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