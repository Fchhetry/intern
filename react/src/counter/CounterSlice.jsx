// counter/CounterSlice.js //slice is a collection of a name and an initial state 
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({ //defining the starting state with a counter value 0
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {//mutating logics
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});
//action creators :automatically generated and exported
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; // reducer function is exported as he default export