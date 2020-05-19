import React, { useState, useEffect } from 'react';

import { Plan } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container } from './styles';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadPlans() {
      const response = await api.get('http://localhost/api/plans');

      setPlans(response.data);
    }

    loadPlans();
  }, []);

  return (
    <Container>
      <List data={plans} component={Plan} />
    </Container>
  );
}
