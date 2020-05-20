import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { storePlans } from '~/store/modules/plans/actions';

import { Plan } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container } from './styles';

export default function Plans() {
  const plans = useSelector(state => state.plans);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      dispatch(storePlans(response.data));
    }

    loadPlans();
  }, [dispatch]);

  return (
    <Container>
      <List data={plans} component={Plan} />
    </Container>
  );
}
