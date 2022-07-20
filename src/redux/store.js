import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from './auth/authSlice';
import daySummaryReducer from './dairy/dairyReducer';
import CalcReducer from '../redux/calculatorSlice/calcSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const calcPersistConfig = {
  key: 'calculator',
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, AuthReducer);
const calcReduser = persistReducer(calcPersistConfig, CalcReducer);


export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    dairy: daySummaryReducer,
    calculator: calcReduser,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
