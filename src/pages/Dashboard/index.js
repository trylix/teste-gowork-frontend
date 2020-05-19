import React, { useEffect, useState } from 'react';

import { Office } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container, Welcome, Logo, Message } from './styles';

function Dashboard() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadOffices() {
      const response = await api.get('http://localhost/api/offices', {
        headers: {
          Authorization:
            'Basic eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aCIsImlhdCI6MTU4OTg2NDQ2NywiZXhwIjoxNTk1MDQ4NDY3LCJuYmYiOjE1ODk4NjQ0NjcsImp0aSI6InFOOGFsaDV5NmF6dWNmV3YiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.7vsaMZDzSC_7nUZuFwKAYwGzXNEPSxv0r56gwRFbTEE',
        },
      });

      setOffices(response.data);
    }

    loadOffices();
  }, []);

  return (
    <Container>
      <Welcome>
        <Logo />
        <Message>
          Gerenciar suas unidades de coworking ficou mais fácil!
        </Message>
      </Welcome>

      <List data={offices} component={Office} />
    </Container>
  );
}

export default Dashboard;
