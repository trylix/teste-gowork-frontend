import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { storeCustomers } from '~/store/modules/customers/actions';

import { Customer } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container } from './styles';

export default function Customers() {
  const customers = useSelector(state => state.customers);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadCustomers() {
      const response = await api.get('customers');

      dispatch(storeCustomers(response.data));
    }

    loadCustomers();
  }, [dispatch]);

  return (
    <Container>
      <List data={customers} component={Customer} />
    </Container>
  );
}
