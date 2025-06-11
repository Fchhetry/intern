import { configureStore } from '@reduxjs/toolkit' //configures the Redux DevTool's store setup function that includes good defaults
import counterReducer from '../counter/CounterSlice' //Reducer Configuration: Maps the counter slice reducer to the 'counter' key in the state
export const store = configureStore({// creates a redux store
  reducer: {
    counter: counterReducer,
  },
})

//configureStore automatically includes: redux devtools extension support,middleware for catching common mistakes, thunk middleware for async actions