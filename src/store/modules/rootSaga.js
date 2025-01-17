import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import create from './create/sagas';

export default function* rootSaga() {
  return yield all([auth, create]);
}
