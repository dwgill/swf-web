import React from 'react';

import Header from './header';
import styles from './page.css';

const Page = ({ children }) => (
  <section className={styles.page} >
    <div className={styles.pageContent}>
      {children}
    </div>
  </section>
);

export default Page;
