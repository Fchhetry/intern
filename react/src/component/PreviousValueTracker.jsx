import React, { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

export default function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h3>Previous Value Hook</h3>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
