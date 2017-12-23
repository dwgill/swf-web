import React from 'react';
import { Route } from 'react-router-dom';
import UserEntry from './containers/UserEntry';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={UserEntry} />
  </React.Fragment>
);

export default Routes;
