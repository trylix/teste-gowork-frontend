import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, element } from 'prop-types';
import DefaultLayout from '~/components/_layouts/default';

export default function Wrapper({ children, isPrivate, ...rest }) {
  const logged = false;

  if (!logged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (logged && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = !logged ? React.Fragment : DefaultLayout;

  return (
    <Route {...rest}>
      <Layout>{children}</Layout>
    </Route>
  );
}

Wrapper.defaultProps = {
  isPrivate: false,
};

Wrapper.propTypes = {
  children: element.isRequired,
  isPrivate: bool,
};
