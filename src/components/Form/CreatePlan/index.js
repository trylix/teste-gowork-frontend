import React, { useState } from 'react';

import Input from '~/components/Input';

import { Container, FormInput } from '../styles';

export default function CreatePlan() {
  const [amount, setAmount] = useState('');

  function handleCurrency(value) {
    value = value.replace('R$ ', '').replace(',00', '');

    setAmount(`${value}`);
  }

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
        value={amount}
        onChange={e => handleCurrency(e.target.value)}
        component={FormInput}
      />
    </Container>
  );
}
