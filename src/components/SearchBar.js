import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchTerm)
  }

  render() {
    const { onFormSubmit } = this;
    const { searchTerm } = this.state;

    return (
      <div className="search-wrapper">
        <form onSubmit={onFormSubmit} className="form">
          <div className="field">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;