import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Consumo API',
      storage,
      whitelist: ['auth'], //nome da chave do reducer no rootReducer,
    },
    reducers
  );

  return persistedReducer;
};
