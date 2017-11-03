import React from 'react';
import styles from './banner.css';
import bannerImage from '../assets/banner.jpg';

export default (props) => (
  <div>
    <img src={bannerImage} />
    <h1 className={styles.banner}>Steam With Friends</h1>
  </div>
);
