import React from 'react';
import classnames from 'classnames';

import styles from './banner.css';

const colorClass = {
  primary: styles.isPrimary,
  link: styles.isLink,
  info: styles.isInfo,
  success: styles.isSuccess,
  warning: styles.isWarning,
  danger: styles.isDanger,
  dark: styles.isDark,
  light: styles.isLight,
}

const sizeClass = {
  medium: styles.isMedium,
  large: styles.isLarge,
  fullheight: styles.isFullHeight,
}

const Banner = ({ children, type = '', size = 'small', bold, floatDown }) => {
  const bannerClasses = classnames(
    styles.banner,
    colorClass[type.toLowerCase()],
    sizeClass[size.toLowerCase()],
    bold ? styles.isBold : '',
  );

  if (children.length >= 3) {
    const [headChild, bodyChild, footChild] = children;
    return (
      <section className={bannerClasses}>
        <div className={styles.bannerHead}>{headChild}</div>
        <div className={styles.bannerBody}>{bodyChild}</div>
        <div className={styles.bannerFoot}>{footChild}</div>
      </section>
    );
  } else if (children.length == 2) {
    const [first, second] = children;
    return (
      <section className={bannerClasses}>
        <div className={floatDown ? styles.bannerBody : styles.bannerHead}>{first}</div>
        <div className={floatDown ? styles.bannerFoot : styles.bannerBody}>{second}</div>
      </section>
    );
  } else {
    return (
      <section className={bannerClasses}>
        <div className={styles.bannerBody}>{children}</div>
      </section>
    );
  }
};

export default Banner;
