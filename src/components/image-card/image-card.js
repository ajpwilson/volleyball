import React from 'react';
import styles from './image-card.module.css';

const ImageCard = ({ id, title, owner, ownername, url_z, description, tags }) => (
  <div className={styles.card}>
    <div className={styles.image}>
      <img alt={id} src={url_z} className={styles.image} />
    </div>
    <div className={styles.name}>
      <h3>
        <a href={`https://www.flickr.com/photos/${owner}/${id}`} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
        <br/>
        <span>
            <span>by </span>
            <a href={`https://www.flickr.com/photos/${owner}`} rel="noopener noreferrer" target="_blank">
              {ownername}
            </a>
          </span>
        </h3>
    </div>
    <div className={styles.content}>
      <p>
        {description._content
          ? description._content.substr(0, 100)
          : 'No description'}
      </p>
    </div>
    {tags &&
      <div className={styles.tags}>
        {(tags.split(' ')).map((tag, i) =>
          <span key={`tag-${i}`} className={styles.tag}>
          {tag}
        </span>)}
      </div>}
  </div>
);

export default ImageCard;