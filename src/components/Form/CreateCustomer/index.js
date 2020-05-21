import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import api from '~/services/api';
import Input from '~/components/Input';

import { Container, FormInput, FormSelect, Select, Icon } from '../styles';

const cpfMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

const cnpjMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1/$2')
    .replace(/(\/\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export default function CreateCustomer() {
  const [docType, setDocType] = useState('0');
  const [document, setDocument] = useState('');

  const [offices, setOffices] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [responseOffices, responsePlans] = await Promise.all([
        api.get('offices'),
        api.get('plans'),
      ]);

      setOffices(responseOffices.data);
      setPlans(responsePlans.data);
    }

    loadData();
  }, []);

  function handleDoctType(value) {
    setDocType(value);
    setDocument('');
  }

  function handleDocument(value) {
    const finalValue = docType === '0' ? cpfMask(value) : cnpjMask(value);

    setDocument(finalValue);
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

      <Select>
        <Input
          id="is_company"
          name="is_company"
          value={docType}
          onChange={e => handleDoctType(e.target.value)}
          component={FormSelect}
        >
          <option value="0">Pessoa Física</option>
          <option value="1">Pessoa Jurídica</option>
        </Input>
        <Icon>
          <FaCaretDown />
        </Icon>
      </Select>

      <Input
        id="document"
        name="document"
        type="text"
        placeholder={docType === '0' ? 'CPF' : 'CNPJ'}
        value={document}
        onChange={e => handleDocument(e.target.value)}
        component={FormInput}
      />

      <Select>
        <Input
          id="office_id"
          name="office_id"
          placeholder="Selecione uma unidade"
          component={FormSelect}
        >
          <option value="" disabled selected>
            Escolha uma unidade
          </option>
          {offices.map(office => (
            <option key={office.id} value={office.id}>
              {office.name}
            </option>
          ))}
        </Input>
        <Icon>
          <FaCaretDown />
        </Icon>
      </Select>

      <Select>
        <Input
          id="plan_id"
          name="plan_id"
          placeholder="Selecione um plano"
          component={FormSelect}
        >
          <option value="" disabled selected>
            Escolha um plano
          </option>
          {plans.map(plan => (
            <option key={plan.id} value={plan.id}>
              {plan.name}
            </option>
          ))}
        </Input>
        <Icon>
          <FaCaretDown />
        </Icon>
      </Select>
    </Container>
  );
}
