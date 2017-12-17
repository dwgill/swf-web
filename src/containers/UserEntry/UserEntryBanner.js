import React from 'react';
import classnames from 'classnames';

import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import styles from './UserEntryBanner.scss';

import swfParty from '../../assets/swf-party.svg';
import swfController from '../../assets/swf-controller.svg';

const UserEntryBanner = props => (
  <Banner size="medium" type="primary" className={styles.banner}>
    <Navigation />
    <div className={styles.bannerBody}>
      <Header
        size="1"
        titleText="Steam with Friends"
        subtitleText="Discover multiplayer games you and your friends own"
        className={styles.header}
      />
    </div>
  </Banner>
);

export default UserEntryBanner;
