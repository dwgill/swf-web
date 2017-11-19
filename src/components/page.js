import React from 'react';

import styles from './page.css';

const Page = (props) => (
  <div className={styles.page} >
    <div className={styles.pageContent}>
      {props.children}
    </div>
  </div>
);

export default Page;
