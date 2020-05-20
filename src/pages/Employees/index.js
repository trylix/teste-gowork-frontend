import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { storeEmployees } from '~/store/modules/employees/actions';

import { Employee } from '~/components/Item';
import List from '~/components/List';
import api from '~/services/api';

import { Container } from './styles';

export default function Employees() {
  const { customerId } = useParams;

  const employees = useSelector(state => state.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEmployees() {
      const response = await api.get(`employees/${customerId}`);

      dispatch(storeEmployees(response.data));
    }

    loadEmployees();
  }, [dispatch]);

  return (
    <Container>
      <List data={employees} component={Employee} />
    </Container>
  );
}
