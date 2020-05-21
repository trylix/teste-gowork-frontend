import React from 'react';

import { array, objectOf } from 'prop-types';

import { Container, Name, Footer, Action } from '../styles';
import { Content } from './styles';

export default function Employee({ data }) {
  return (
    <Container>
      <Content>
        <Name>{data.name}</Name>
      </Content>
      <Footer>
        <Action delete>Excluir</Action>
      </Footer>
    </Container>
  );
}

Employee.propTypes = {
  data: objectOf(array).isRequired,
};
