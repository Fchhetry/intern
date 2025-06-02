import React, { useEffect, useState } from 'react'; //useState will hold and update component state and useEffect will run side effects like updating the DOM or logging

function ExUseEffect() {
  const [count, setCount] = useState(0);//react re-renders the component

  useEffect(() => {
    console.log('useEffect: Count changed to', count);
    document.title = `Count: ${count}`;

    return () => { //runs before the effect runs again
      console.log('Cleanup from useEffect');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

export default ExUseEffect;
