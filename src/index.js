import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import UserEntry from './containers/userEntry';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={UserEntry}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('app'));

