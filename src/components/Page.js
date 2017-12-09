import React from 'react';
import classnames from 'classnames';
import styles from './Page.css';

const Page = ({ children, bgClassName = '', className = '' }) => (
  <section
    className={classnames(
      styles.backgroundCommon,
      bgClassName || styles.backgroundDefault
    )}
  >
    <div
      className={classnames(styles.pageCommon, className || styles.pageDefault)}
    >
      {children}
    </div>
  </section>
);

export default Page;
