import * as React from 'react';
import UserEntry from './containers/UserEntry';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={UserEntry} />
    </Switch>
  </Router>
);

export default App;
