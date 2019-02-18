import React, { Component } from "react";

class ImageCard extends Component {

  render() {
    const { photos } = this.props;
    console.log({ photos });
    return (
      <div>
        <div>Photos: {photos.length}</div>
      </div>
    );
  }
}

export default ImageCard;