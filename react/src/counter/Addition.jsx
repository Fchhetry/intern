// counter.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'
//useSelector: Hook to read data from the Redux store state
//useDispatch: Hook to get the dispatch function for triggering actions
export function Addition() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
