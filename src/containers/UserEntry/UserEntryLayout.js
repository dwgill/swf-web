import React from 'react';
import Page from '../../components/Page';
import Banner  from '../../components/Banner';
import Header from '../../components/Header';
import EnterUsersForm from '../../forms/EnterUsersForm';

const UserEntryLayout = ({ handleFormSubmission }) => (
  <div>
    <Banner type="dark">
      <Header
        titleText='Steam with Friends'
        subtitleText='Discover what multiplayer games you and your friends all own'
        size="1"
      />
    </Banner>
    <Page>
      <EnterUsersForm onSubmit={({users}) => console.log(users.filter(x => x))}/>
    </Page>
  </div>
);

export default UserEntryLayout;
