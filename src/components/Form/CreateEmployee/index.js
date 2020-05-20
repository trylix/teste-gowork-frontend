import React from 'react';

import Input from '~/components/Input';

import { Container, FormInput } from '../styles';

export default function CreateEmployee() {
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
        id="customer_id"
        name="customer_id"
        type="text"
        placeholder="Funcionário de"
        component={FormInput}
      />
    </Container>
  );
}
