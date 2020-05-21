import React from 'react';
import { objectOf, element } from 'prop-types';

import { Wrapper, Left, Logo, Right } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Left>
        <Logo />
      </Left>
      <Right>{children}</Right>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: objectOf(element).isRequired,
};
