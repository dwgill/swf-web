import React from 'react';
import classnames from 'classnames';
import styles from './Banner.scss';

const colorClass = {
  primary: styles.colorPrimary,
  link: styles.colorLink,
  info: styles.colorInfo,
  success: styles.colorSuccess,
  warning: styles.colorWarning,
  danger: styles.colorDanger,
  dark: styles.colorDark,
  light: styles.colorLight,
};

const sizeClass = {
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
  fullheight: styles.sizeFullHeight,
};

const Banner = ({
  children,
  type = '',
  size = 'small',
  bold,
  shiftDown,
  className,
}) => {
  const bannerClasses = classnames(
    styles.common,
    colorClass[type.toLowerCase()],
    sizeClass[size.toLowerCase()],
    bold ? styles.bold : '',
    className
  );

  if (children.length >= 3) {
    const [headChild, bodyChild, footChild] = children;
    return (
      <section className={bannerClasses}>
        <div className={styles.head}>{headChild}</div>
        <div className={styles.body}>{bodyChild}</div>
        <div className={styles.foot}>{footChild}</div>
      </section>
    );
  } else if (children.length == 2) {
    const [first, second] = children;
    return (
      <section className={bannerClasses}>
        <div className={shiftDown ? styles.body : styles.head}>{first}</div>
        <div className={shiftDown ? styles.foot : styles.body}>{second}</div>
      </section>
    );
  } else {
    return (
      <section className={bannerClasses}>
        <div className={styles.body}>{children}</div>
      </section>
    );
  }
};

export default Banner;
