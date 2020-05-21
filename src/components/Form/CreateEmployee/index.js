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
    </Container>
  );
}
