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
      const response = await api.get('http://localhost/api/customers', {
        headers: {
          Authorization:
            'Basic eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aCIsImlhdCI6MTU4OTg2NDQ2NywiZXhwIjoxNTk1MDQ4NDY3LCJuYmYiOjE1ODk4NjQ0NjcsImp0aSI6InFOOGFsaDV5NmF6dWNmV3YiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.7vsaMZDzSC_7nUZuFwKAYwGzXNEPSxv0r56gwRFbTEE',
        },
      });

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
