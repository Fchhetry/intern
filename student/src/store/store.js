import { configureStore, combineReducers } from '@reduxjs/toolkit';
import studentReducer from './StudentSlice';
import { logger } from 'redux-logger';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  students: studentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // important for redux-persist to work
    }).concat( logger),
});

export const persistor = persistStore(store);

export default store;
