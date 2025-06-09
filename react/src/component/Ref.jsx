import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null); //Store interval ID

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset ref
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h2>Stopwatch (useRef)</h2>
      <h3>{time} seconds</h3>
      <button onClick={startTimer}>Start</button>{" "}
      <button onClick={stopTimer}>Stop</button>{" "}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
