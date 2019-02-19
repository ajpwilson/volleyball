import React from "react";
import axios from "axios";
import SearchBar from "../components/search/SearchBar";
import ImageList from "../components/cards/ImageList";

// create an instance of axios with the url and default params set
const axiosInstance = axios.create({
  baseURL: "https://api.flickr.com/services/rest/",
  params: {
    api_key: "5e263bab53c7c3bfc9350ef4256a1ae7",
    method: "flickr.photos.search",
    safe_search: 1,
    format: "json",
    nojsoncallback: 1,
    extras: `description,owner_name,tags,url_o,url_z`
  }
});

class Api extends React.Component {
  state = {
    searchTerm: '',
    perPage: 20,
    items: []
  };

  // take the target value from the onChange event and set in state
  updateSearchTerm = ({ target: { value } }) =>
    this.setState({ searchTerm: value });

  // take the target value from the onChange event and set in state
  updatePerPage = ({ target: { value } }) => this.setState({ perPage: value });

  // Maybe do this in redux?
  fetchPhotos = async () => {
    const { searchTerm, perPage } = this.state;

    // create a params objects from user input
    const params = {
      text: searchTerm,
      per_page: perPage
    };

    // use the axios instance with all default settings (cleaner code)
    const { data } = await axiosInstance({ params });
    // pull photos array from response and set local state
    this.setState({ items: data.photos.photo });
  };

  render() {
    const { updateSearchTerm, updatePerPage, fetchPhotos } = this;
    const { items, searchTerm, perPage } = this.state;
    return (
      <div>
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

export default Api;