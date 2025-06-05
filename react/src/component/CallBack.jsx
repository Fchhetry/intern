import React, { useState, useCallback } from 'react';

const ChildButton = React.memo(({ onClick }) => { //only re-renders if its props change
  console.log(' ChildButton re-rendered');
  return <button onClick={onClick}>Click Me</button>;// passed as a prop
});

function Callback() {
  const [count, setCount] = useState(0);//tracks how many times the "click me" button is pressed
  const [otherState, setOtherState] = useState(false); //separate state to test re-renders

  // Memoize the function so it's not recreated on every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Count: {count}</h3>
      <ChildButton onClick={handleClick} /> {/*preventing from re-render unnecessary */}

      <br /><br />
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      <p>Other State: {otherState.toString()}</p>
    </div>
  );
}

export default Callback;
