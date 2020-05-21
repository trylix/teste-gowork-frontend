import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { addCustomer } from '~/store/modules/customers/actions';
import { addOffice } from '~/store/modules/offices/actions';
import { addPlan } from '~/store/modules/plans/actions';
import { addEmployee } from '~/store/modules/employees/actions';

export function* createCustomer({ payload }) {
  try {
    const response = yield call(api.post, 'customers', {
      ...payload,
    });

    yield put(addCustomer(response.data));

    toast.success('O cliente foi cadastrado!');
  } catch (err) {
    toast.error(
      'Não foi possível cadastrar um novo cliente. Verifique os dados e tente novamente.',
    );
  }
}

export function* createOffice({ payload }) {
  try {
    const response = yield call(api.post, 'offices', {
      ...payload,
    });

    yield put(addOffice(response.data));

    toast.success('A unidade foi cadastrado!');
  } catch (err) {
    toast.error(
      'Não foi possível cadastrar uma nova unidade. Verifique os dados e tente novamente.',
    );
  }
}

export function* createPlan({ payload }) {
  try {
    const response = yield call(api.post, 'plans', {
      ...payload,
    });

    yield put(addPlan(response.data));

    toast.success('O plano foi cadastrado!');
  } catch (err) {
    toast.error(
      'Não foi possível cadastrar um novo plano. Verifique os dados e tente novamente.',
    );
  }
}

export function* createEmployee({ payload }) {
  try {
    const response = yield call(api.post, 'employees', {
      ...payload,
    });

    yield put(addEmployee(response.data));

    toast.success('O funcionário foi cadastrado!');
  } catch (err) {
    toast.error(
      'Não foi possível cadastrar um novo funcionário. Verifique os dados e tente novamente.',
    );
    console.log.tron(err);
  }
}

export default all([
  takeLatest('@create/CREATE_CUSTOMER_REQUEST', createCustomer),
  takeLatest('@create/CREATE_OFFICE_REQUEST', createOffice),
  takeLatest('@create/CREATE_PLAN_REQUEST', createPlan),
  takeLatest('@create/CREATE_EMPLOYEE_REQUEST', createEmployee),
]);
