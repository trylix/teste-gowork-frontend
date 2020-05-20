import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gowork',
      storage,
      whitelist: [
        'auth',
        'create',
        'customers',
        'offices',
        'plans',
        'employees',
      ],
    },
    reducers,
  );

  return persistedReducer;
};
