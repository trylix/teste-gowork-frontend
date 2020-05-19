import React, { useState, useEffect } from 'react';

import { Customer } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container } from './styles';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadCustomers() {
      const response = await api.get('http://localhost/api/customers');

      setCustomers(response.data);
    }

    loadCustomers();
  }, []);

  return (
    <Container>
      <List data={customers} component={Customer} />
    </Container>
  );
}
