import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, element } from 'prop-types';

export default function Wrapper({ children, isPrivate, ...rest }) {
  const logged = false;

  if (!logged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (logged && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest}>{children}</Route>;
}

Wrapper.defaultProps = {
  isPrivate: false,
};

Wrapper.propTypes = {
  children: element.isRequired,
  isPrivate: bool,
};
