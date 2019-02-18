// import React, { Component } from "react";
// import axios from 'axios';

// const baseUrl = `https://api.flickr.com/services/rest/`;
// const API_KEY = process.env.REACT_APP_API_KEY;

// const method = `flickr.interestingness.getList`;
// const safe = 1;
// const format = `json`;
// const jsonCallback = 1;
// const pageCount = 20;
// const extras = `description, owner_name, tags`;

// class Api extends Component {
//   state = {
//     items: []
//   }

//   componentDidMount() {
//     this.request =
//       axios
//         .get(`${baseUrl}?method=${method}&api_key=${API_KEY}&format=${format}&nojsoncallback=${jsonCallback}&per_page=${pageCount}&safe_search=${safe}&extras=${extras}`)
//         .then((result => {
//           this.setState({
//             items: result.data.photos.photo
//           })
//         }))
//   }

//   imgUrl(image) {
//     return `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <div className="card-container">
//           {this.state.items.length ?
//             this.state.items.map((item, index) =>
//               <div key={index} className="card">
//                 <div className="image">
//                   <img alt={item.id} src={this.imgUrl(item)}/>
//                 </div>
//                 <div className="name">
//                   <h3><a href={this.imgUrl(item)}>{item.title}</a> <br/><span>by <a href={`https://www.flickr.com/photos/${item.owner}`}>{item.ownername}</a></span></h3>
//                 </div>
//                 <div className="content">
//                   <p>{item.description._content.substr(0, 150)}...</p>
//                 </div>
//                 <div className="tags"><h4>Tags</h4><p>{item.tags.substr(0, 50)}...</p></div>
//               </div>

//               )
//             : <div>Loading...</div>
//           }
//         </div>
//       </div>
//     )
//   }
// }

// export default Api;


import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";

// create an instance of axios with the url and default params set
const axiosInstance = axios.create({
  baseURL: "https://api.flickr.com/services/rest/",
  params: {
    api_key: "5e263bab53c7c3bfc9350ef4256a1ae7",
    method: "flickr.photos.search",
    safe_search: 1,
    format: "json",
    nojsoncallback: 1,
    extras: `description, owner_name, tags`
  }
});

class Api extends React.Component {
  state = {
    searchTerm: '',
    perPage: 20,
    photos: []
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
    this.setState({ photos: data.photos.photo });
  };

  render() {
    const { updateSearchTerm, updatePerPage, fetchPhotos } = this;
    const { photos, searchTerm, perPage } = this.state;
    return (
      <div>
        <SearchBar
          searchTerm={searchTerm}
          updateSearchTerm={updateSearchTerm}
          perPage={perPage}
          updatePerPage={updatePerPage}
          fetchPhotos={fetchPhotos}
        />
        <ImageCard photos={photos} />
      </div>
    );
  }
}

export default Api;
