import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';
import {Provider} from 'react-redux';
import store from './store';

export const router = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/posts/:postId" component={Post} />
      </Route>
    </Router>
  </Provider>
)
