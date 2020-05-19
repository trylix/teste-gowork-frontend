import React from 'react';

import { element } from 'prop-types';

import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

DefaultLayout.propTypes = {
  children: element.isRequired,
};
