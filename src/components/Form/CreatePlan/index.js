import React from 'react';

import Input from '~/components/Input';

import { Container, FormInput, RealInput } from '../styles';

export default function CreatePlan() {
  return (
    <Container>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Nome"
        component={FormInput}
      />

      <Input
        id="monthly_cost"
        name="monthly_cost"
        type="numeric"
        placeholder="Valor mensal"
        component={RealInput}
      />
    </Container>
  );
}
