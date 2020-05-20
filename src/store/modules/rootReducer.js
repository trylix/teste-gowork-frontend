import { combineReducers } from 'redux';

import auth from './auth/reducer';
import create from './create/reducer';
import customers from './customers/reducer';
import offices from './offices/reducer';
import plans from './plans/reducer';
import employees from './employees/reducer';

export default combineReducers({
  auth,
  create,
  customers,
  offices,
  plans,
  employees,
});
