import React from 'react';
import Page from './page';

import styles from './frontPage.css';

const FrontPage = (props) => (
  <Page>
    <h1 className={styles.bigText}>Hello World!</h1>
  </Page>
);

export default FrontPage;
