import React, { useState } from 'react'; //usestate is hook and esle chi functional components lai state lina allow garxa

function Functional() { // functional component named functional
  const [count, setCount] = useState(0); //state initializing

  return (
    <div>
      <h2>Functional Component Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Functional;
