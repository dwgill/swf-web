import React from 'react';
import { connect } from 'react-redux';
import Page from '../components/page';
import Banner from '../components/banner';
import UsersForm from '../forms/enterUsersForm'

import styles from './userEntry.css';

const UserEntry = (props) => (
  <Page>
    <Banner />
    <UsersForm />
  </Page>
);

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEntry);
