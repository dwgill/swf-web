import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import rootReducer from './reducers';
import Routes from './Routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
