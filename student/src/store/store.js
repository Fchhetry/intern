import { configureStore, combineReducers } from '@reduxjs/toolkit';
import studentReducer from './StudentSlice';
import { logger } from 'redux-logger';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Persist config
const persistConfig = {
  key: 'root',
  version : 2,
  storage,
};

const rootReducer = combineReducers({
  students: studentReducer, // cobines all reucers to a single root reducer here students
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // wraps root reducer with persist capabilities
//handles saving the state to localStorage and rehydrating it 

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // important for redux-persist to work
      // redux persist stores non serializable metadata which causes warnings/errors .
    }).concat( logger), // adds redux logger middleware for debugging- logs every action and state change in the console
});

export const persistor = persistStore(store);

export default store;
