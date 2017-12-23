import React from 'react';

import logo from '../../assets/swf-controller.svg';
import styles from './Navigation.scss';

const Navigation = ({ menuActive, handleToggleMenu }) => (
  <nav
    role="navigation"
    aria-label="main navigation"
    className={styles.navigation}
  >
    <div className={styles.navBrand}>
      <div className={styles.logoBox}>
        <img src={logo} className={styles.logo} alt="Steam with Friends" />
      </div>
      <button className={styles.navButtton} onClick={handleToggleMenu}>
        <span />
        <span />
        <span />
      </button>
    </div>
    <div className={menuActive ? styles.navMenuActive : styles.navMenu}>
      <div className={styles.navMenuLeft} />
      <div className={styles.navMenuRight}>
        <a className={styles.navItem}>Home</a>
        <a className={styles.navItem}>About</a>
      </div>
    </div>
  </nav>
);

export default Navigation;
