import React, { Component } from 'react';
import styles from './image-card.module.css';

class ImageCard extends Component {

  render() {
    const { items } = this.props;
    console.log({ items });
    return (
      <div className={styles.container}>
        {items.map((item, i) =>
          <div key={`card-${i}`} className={styles.card}>
            <div className={styles.image}>
              <img alt={item.id} src={item.url_z}/>
            </div>
            <div className={styles.name}>
              <h3><a href={`https://www.flickr.com/photos/${item.owner}/${item.id}`} rel="noopener noreferrer" target="_blank">{item.title}</a> <br/><span>by <a href={`https://www.flickr.com/photos/${item.owner}`}>{item.ownername}</a></span></h3>
            </div>
            <div className={styles.content}>
              <p>{item.description._content ? item.description._content.substr(0, 100) : `No description` }</p>
            </div>
            <div className={styles.tags}>
              {(item.tags.split(' ') || []).map((tag, i) =>
                <span key={`tag-${i}`} className={styles.tag}>
                {tag ? tag : `No tags`}
              </span>)}
            </div>
          </div>
          )
        }
      </div>
    );
  }
}

export default ImageCard;