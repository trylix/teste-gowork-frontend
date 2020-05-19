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
      const response = await api.get('offices');

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
