import React from 'react';
import classnames from 'classnames';
import styles from './Page.css';

const Page = ({ children, className = '', contentClassName = '' }) => (
  <section
    className={classnames(
      styles.backgroundCommon,
      className || styles.backgroundDefault
    )}
  >
    <div
      className={classnames(styles.pageCommon, contentClassName || styles.pageDefault)}
    >
      {children}
    </div>
  </section>
);

export default Page;
