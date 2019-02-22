import React from 'react';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>Flickr Photo Stream</h1>
    <a
      className={styles.link}
      href='https://github.com/ajpwilson/volleyball'
      target="_blank"
      rel="noopener noreferrer"
    >
      Repo
    </a>
  </header>
)


export default Header;