import React from 'react';
import classnames from  'classnames';

import styles from './header.css';

const titles = {
  1: (text) => <h1 className={styles.title1}>{text}</h1>,
  2: (text) => <h2 className={styles.title2}>{text}</h2>,
  3: (text) => <h3 className={styles.title3}>{text}</h3>,
  4: (text) => <h4 className={styles.title4}>{text}</h4>,
  5: (text) => <h5 className={styles.title5}>{text}</h5>,
  6: (text) => <h6 className={styles.title6}>{text}</h6>,
}

const subtitles = {
  1: (text) => <h1 className={styles.subtitle1}>{text}</h1>,
  2: (text) => <h2 className={styles.subtitle2}>{text}</h2>,
  3: (text) => <h3 className={styles.subtitle3}>{text}</h3>,
  4: (text) => <h4 className={styles.subtitle4}>{text}</h4>,
  5: (text) => <h5 className={styles.subtitle5}>{text}</h5>,
  6: (text) => <h6 className={styles.subtitle6}>{text}</h6>,
}

const Header = ({titleText, subtitleText, size=3}) => {
  const titleSize = Math.max(1, Math.min(size, 6));
  const subSize = Math.min(titleSize+2, 6);
  if (titleText && subtitleText) {
    return (
      <div>
        {titles[titleSize](titleText)}
        {subtitles[subSize](subtitleText)}
      </div>
    );
  } else if (titleText) {
    return titles[titleSize](titleText);
  } else if (subtitleText) {
    return subtitles[subSize](subtitleText);
  } else {
    return titles[1]('');
  }
};

export default Header;
