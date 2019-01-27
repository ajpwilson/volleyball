import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="search-wrapper">
        <form onSubmit={this.onFormSubmit} className="form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="Search..." value={this.state.term} onChange={event => this.setState({ term: event.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;