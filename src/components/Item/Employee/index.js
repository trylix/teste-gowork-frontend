import React from 'react';

import { array, objectOf } from 'prop-types';

import { Container, Header, Name, Footer, Action } from '../styles';

export default function Employee({ data }) {
  return (
    <Container>
      <Header>
        <Name>{data.name}</Name>
      </Header>

      <Footer>
        <Action delete>Excluir</Action>
      </Footer>
    </Container>
  );
}

Employee.propTypes = {
  data: objectOf(array).isRequired,
};
