import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'normalize.css';

import UserEntry from './containers/user_entry';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <Switch>
        <Route path="/" component={UserEntry}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('app'));

