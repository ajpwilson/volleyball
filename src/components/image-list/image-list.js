import React, { Component } from 'react';
import ImageCard from './../image-card/image-card';
import styles from './image-list.module.css';

class ImageList extends Component {

  render() {
    const { items } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.count}>
          {items.length === 0 ? <div><p>Search for something above.</p></div> :
          <div><p>Photos: {items.length}</p></div>
          }
        </div>

        {!items
        ? <p className={styles.loading}>Loading...</p>
        : <ImageCard items={items} />}
      </div>
    );
  }
}

export default ImageList;