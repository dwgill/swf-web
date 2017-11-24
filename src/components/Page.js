import React from 'react';

import styles from './Page.css';

const Page = ({ children }) => (
  <section className={styles.page} >
    <div className={styles.pageContent}>
      {children}
    </div>
  </section>
);

export default Page;
