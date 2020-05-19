import React, { useEffect, useState } from 'react';

import { Office } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container } from './styles';

function Offices() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadOffices() {
      const response = await api.get('http://localhost/api/offices');

      setOffices(response.data);
    }

    loadOffices();
  }, []);

  return (
    <Container>
      <List data={offices} component={Office} />
    </Container>
  );
}

export default Offices;
