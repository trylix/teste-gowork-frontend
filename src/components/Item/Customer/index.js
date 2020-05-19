import React from 'react';

import { array, objectOf } from 'prop-types';

import { CustomerText } from './styles';
import { Container, Header, Name, Body, Footer, Action } from '../styles';

export default function Plan({ data }) {
  return (
    <Container>
      <Header>
        <Name>{data.name}</Name>
      </Header>

      <Body>
        <CustomerText>
          <span>Unidade</span>
          {data.office.name}
        </CustomerText>
        <CustomerText>
          <span>Plano</span>
          {data.plan.name}
        </CustomerText>
      </Body>

      <Footer>
        <Action>Funcionários</Action>
        <Action delete>Excluir</Action>
      </Footer>
    </Container>
  );
}

Plan.propTypes = {
  data: objectOf(array).isRequired,
};
