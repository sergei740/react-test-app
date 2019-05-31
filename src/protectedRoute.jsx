import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getLocalItem } from './utils/localStorageUtil';

export const ProtectedListRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getLocalItem('token')
    ? <Component {...props} />
    : <Redirect to='/'/>
    )}/>
);

export const ProtectedSignInRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (!getLocalItem('token'))
      ? <Component {...props} />
      : <Redirect to='/'/>
  )}/>
);