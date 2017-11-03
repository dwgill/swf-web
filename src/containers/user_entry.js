import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/banner';
import UsersForm from '../forms/users_form';

const UserEntry = (props) => (
  <div>
    <Banner />
    <UsersForm />
  </div>
);

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEntry);
