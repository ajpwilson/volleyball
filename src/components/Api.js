import React, { Component } from "react";
import axios from 'axios'

const baseUrl = `https://api.flickr.com/services/rest/`;
const API_KEY = process.env.REACT_APP_API_KEY;

const method = `flickr.interestingness.getList`;
// const method = `flickr.photos.getRecent`;
const format = `json`;
const jsonCallback = 1;
const pageCount = 20;
// const extras = `owner_name,description,url_o`;
const extras = `description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o`;

// class Api extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//     }
//   }

//   componentDidMount() {
//     const url = `${baseUrl}?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=30&format=json&nojsoncallback=1&extras=owner_name,description,url_o,user_id`;

//     fetch(url)
//       .then(response => response.json())
//       .then(result => {
//         this.setState({
//           items: result.photos.photo
//         })
//       }
//     );
//   }

//   // assemble image URL
//   imageURL(item) {
//     return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
//   }

//   render() {
//     const { items } = this.state;

//     return (
//       this.state.items.map((item, i =>
//       <div className="wrapper">
//         <ul className="list">
//           <li className="card" key={this.state.items}>
//             {this.state.items.length ?
//               this.state.items.map((item, index) =>
//                 <div key={index} onClick={this.selectImage.bind(this,this.imageURL(item))}>
//                   <img className="media-gallery-thumbnails__img" src={this.imageURL(item)}/>
//                 </div>)
//               : <div>Loading...</div>
//             }
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }

// export default Api;


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
                      <h3>{item.title} <span>by {item.ownername}</span></h3>
                    </div>
                    <div className="content">
                      <p>{item.description._content.length}</p>
                    </div>
                    <div className="tags">Tags to go here...</div>
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