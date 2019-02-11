import React, { Component } from "react";
import axios from 'axios';

const baseUrl = `https://api.flickr.com/services/rest/`;
const API_KEY = process.env.REACT_APP_API_KEY;

const method = `flickr.interestingness.getList`;
const safe = 1;
const format = `json`;
const jsonCallback = 1;
const pageCount = 20;
const extras = `description, owner_name, tags`;

class Api extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.request =
      axios
        .get(`${baseUrl}?method=${method}&api_key=${API_KEY}&format=${format}&nojsoncallback=${jsonCallback}&per_page=${pageCount}&safe_search=${safe}&extras=${extras}`)
        .then((result => {
          this.setState({
            items: result.data.photos.photo
          })
        }))
  }

  imgUrl(image) {
    return `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card-container">
          {this.state.items.length ?
            this.state.items.map((item, index) =>
              <div key={index} className="card">
                <div className="image">
                  <img alt={item.id} src={this.imgUrl(item)}/>
                </div>
                <div className="name">
                  <h3><a href={this.imgUrl(item)}>{item.title}</a> <br/><span>by <a href={`https://www.flickr.com/photos/${item.owner}`}>{item.ownername}</a></span></h3>
                </div>
                <div className="content">
                  <p>{item.description._content.substr(0, 150)}...</p>
                </div>
                <div className="tags"><h4>Tags</h4><p>{item.tags.substr(0, 50)}...</p></div>
              </div>

              )
            : <div>Loading...</div>
          }
        </div>
      </div>
    )
  }
}

export default Api;