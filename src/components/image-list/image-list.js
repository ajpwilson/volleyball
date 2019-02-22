import React from 'react';
import ImageCard from './../image-card/image-card';
import styles from './image-list.module.css';

const ImageList = ({ items, total }) => (
  <div className={styles.wrapper}>
    <div className={styles.count}>
      {items.length > 0 &&
        <p>Showing {items.length} of {total} results</p>
      }
    </div>

    {!items
      ? <p className={styles.loading}>Loading...</p>
      : (
        <div className={styles.container}>
          {items.map(item => <ImageCard {...item} key={item.id} />)}
        </div>
      )}
  </div>
)

export default ImageList;