import React from 'react';
import Page from '../../components/Page';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import EnterUsersForm from '../../forms/EnterUsersForm';
import styles from './UserEntryLayout.css';

const UserEntryLayout = ({ handleFormSubmission }) => (
  <div className={styles.userEntry}>
    <Banner size="medium" type="info">
      <Header
        size="1"
        titleText="Steam with Friends"
        subtitleText="Discover multiplayer games you and your friends own"
        bold
      />
    </Banner>
    <Page className={styles.page}>
      <EnterUsersForm
        onSubmit={({ users }) => console.log(users.filter(x => x))}
      />
    </Page>
  </div>
);

export default UserEntryLayout;
