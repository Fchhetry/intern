import React, { useState } from "react";

function expensiveCalculation(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1_000_000_000; i++) { // 100000000ma count add huncha, also called billion iteration loop and it block the UI , no updates, clicks , or rendering can happen until it finishes
    num += 1;
  }
  return num;
}

export default function CounterWithCalc() {
  const [count, setCount] = useState(0); //setcount updates it
  const calculation = expensiveCalculation(count); // passes the current count state into expensiveCalculation 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>

      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  );
}
