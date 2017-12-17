import React from 'react';
import Page from '../../components/Page';
import EnterUsersForm from '../../forms/EnterUsersForm';

import UserEntryBanner from './UserEntryBanner';
import styles from './UserEntryLayout.scss';

const UserEntryLayout = ({ handleFormSubmission }) => (
  <div className={styles.userEntry}>
    <UserEntryBanner />
    <Page className={styles.page}>
      <EnterUsersForm
        onSubmit={({ users }) => console.log(users.filter(x => x))}
      />
    </Page>
  </div>
);

export default UserEntryLayout;
