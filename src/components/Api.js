import React, { Component } from "react";
import axios from 'axios'

const baseUrl = `https://api.flickr.com/services/rest/`;
const API_KEY = process.env.REACT_APP_API_KEY;

const method = `flickr.interestingness.getList`;
// const method = `flickr.photos.getRecent`;
// const method = `flickr.photos.getPopular`;
const format = `json`;
const jsonCallback = 1;
const pageCount = 20;
const extras = `description, owner_name, tags, url_z, url_o`;

class Api extends Component {

    // set initial state of elements
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    // make API request
    componentDidMount() {
      this.request =
        axios
          .get(`${baseUrl}?method=${method}&api_key=${API_KEY}&format=${format}&nojsoncallback=${jsonCallback}&per_page=${pageCount}&extras=${extras}`)
          .then((result => {
            this.setState({
              items: result.data.photos.photo
            })
          }))
    }

    // handle image selection
    selectImage(selectedImage) {
        this.setState({
            selectedImage
        })
    }

    // render the app
    render() {
        const { items } = this.state;
        console.log(items);
        return (
          <div className="wrapper">
            <div className="card-container">
              {this.state.items.length ?
                this.state.items.map((item, index) =>
                  <div key={index} className="card">
                    <div className="image">
                      <img alt={item.id} src={item.url_z}/>
                    </div>
                    <div className="name">
                      <h3>{item.title} <br/><span>by {item.ownername}</span></h3>
                    </div>
                    <div className="content">
                      <p>{item.description._content.substr(0, 200)}...</p>
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