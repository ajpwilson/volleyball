import React, { Component } from 'react';
import ImageCard from './../image-card/image-card';
import './image-list.css';

class ImageList extends Component {

  render() {
    const { items } = this.props;

    return (
      <div className="card-wrapper">
        <div className="card-count">
          <div>Photos: {items.length}</div>
        </div>

        <ImageCard items={items} />
      </div>
    );
  }
}

export default ImageList;