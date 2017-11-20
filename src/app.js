import React from 'react';
import UserEntry from './containers/userEntry';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = (props) => (
  <Router>
    <Switch>
      <Route path="/" component={UserEntry}/>
    </Switch>
  </Router>
);

export default App;
