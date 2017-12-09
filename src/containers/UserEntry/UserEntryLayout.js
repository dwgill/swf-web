import React from 'react';
import Page from '../../components/Page';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import EnterUsersForm from '../../forms/EnterUsersForm';
import styles from './UserEntryLayout.css';

const UserEntryLayout = ({ handleFormSubmission }) => (
  <div>
    <Banner size="medium" type="info">
      <Header
        size="1"
        titleText="Steam with Friends"
        subtitleText="Discover multiplayer games you and your friends own"
        bold
      />
    </Banner>
    <Page
      heading={
        <Header
          titleText="Steam with Friends"
          subtitleText="Discover what multiplayer games you and your friends all own"
          size="1"
        />
      }
    >
      <EnterUsersForm
        onSubmit={({ users }) => console.log(users.filter(x => x))}
      />
    </Page>
  </div>
);

export default UserEntryLayout;
