import React, { useReducer } from "react";

//  Initial state
const initialState = { count: 0 };

//  Reducer function: decides how to update the state based on action
//takes the current state and an action object and returns a new state.
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function CounterReducer() {
  // useReducer takes a reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Counter Example</h2>
      <h3>Count: {state.count}</h3>

      {/* Dispatch actions , button calls dispatch() with a specific action type*/}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterReducer;
