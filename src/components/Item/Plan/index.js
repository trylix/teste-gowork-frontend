import React from 'react';

import { array, objectOf } from 'prop-types';

import { PlanItem, PlanText, PlanCost } from './styles';
import { Container, Header, Name, Body, Footer, Action } from '../styles';

export default function Plan({ data }) {
  return (
    <Container>
      <Header center>
        <Name>{data.name}</Name>
      </Header>
      <Body>
        <PlanItem>
          <PlanText>Valor mensal</PlanText>
          <PlanCost>{data.monthly_cost}</PlanCost>
        </PlanItem>
      </Body>

      <Footer>
        <Action delete>Excluir</Action>
      </Footer>
    </Container>
  );
}

Plan.propTypes = {
  data: objectOf(array).isRequired,
};