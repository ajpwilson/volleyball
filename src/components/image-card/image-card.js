import React, { Component } from 'react';
import './image-card.css';

class ImageCard extends Component {

  render() {
    const { items } = this.props;
    console.log({ items });
    return (
      <div className="card-container">
        {items.length ?
          items.map((item, i) =>
            <div key={`card-${i}`} className="card">
              <div className="image">
                <img alt={item.id} src={item.url_z}/>
              </div>
              <div className="name">
                <h3><a href={item.url_o}>{item.title}</a> <br/><span>by <a href={`https://www.flickr.com/photos/${item.owner}`}>{item.ownername}</a></span></h3>
              </div>
              <div className="content">
                <p>{item.description._content ? item.description._content.substr(0, 100) : `No description` }</p>
              </div>
              <div className="tags">
                {(item.tags.split(' ') || []).map((tag, i) =>
                  <span key={`tag-${i}`} className="tag">
                  {tag ? tag : `No tags`}
                </span>)}
              </div>
            </div>

            )
          : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default ImageCard;