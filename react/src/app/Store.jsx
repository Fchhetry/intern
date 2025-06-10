import { configureStore } from '@reduxjs/toolkit' //configures the Redux DevTool
import counterReducer from '../counter/CounterSlice'
export const store = configureStore({// creates a redux store
  reducer: {
    counter: counterReducer,
  },
})