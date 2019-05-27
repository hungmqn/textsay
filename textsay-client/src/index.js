import React, {lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './index.css';

const Home = lazy(() => import('./containers/Home'));
const Login = lazy(() => import('./containers/Login'));
const Register = lazy(() => import('./containers/Register'));
const Profile = lazy(() => import('./containers/Profile'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense maxDuration={1500} fallback={<h1>Loading...</h1>}>
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <Profile path="/profile" />
      </Router>
    </Suspense>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
