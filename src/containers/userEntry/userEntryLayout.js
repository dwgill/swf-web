import React from 'react';
import Page from '../../components/page';
import Banner  from '../../components/banner';
import Header from '../../components/header';
import UsersForm from '../../forms/enterUsersForm'

const UserEntryLayout = (props) => (
  <div>
    <Banner type="dark">
      <Header
        titleText='Steam with Friends'
        subtitleText='Discover what multiplayer games you and your friends all own'
        size="1"
      />
    </Banner>
    <Page>
      <UsersForm />
    </Page>
  </div>
);

export default UserEntryLayout;
