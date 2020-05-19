import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { logInSuccess, logInFailure } from './actions';

export function* logIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', {
      email,
      password,
    });

    const { access_token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${access_token} `;

    yield put(logInSuccess(access_token));

    history.push('/dashboard');
  } catch (err) {
    toast.error('A autenticação falhou! Por favor, verifique seus dados.');

    yield put(logInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token} `;
  }
}

export function logOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOG_IN_REQUEST', logIn),
  takeLatest('@auth/LOG_OUT', logOut),
]);
