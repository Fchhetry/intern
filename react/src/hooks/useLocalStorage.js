import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) { //custom hook initialization
  const [value, setValue] = useState(() => { // calling a built in hook
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue; // stored true huda JSan.parse(stored) return garnu or else iniitial value
  });

  useEffect(() => { //save data in local storage
    localStorage.setItem(key, JSON.stringify(value)); //data save garera convert js value to a JSON string
  }, [key, value]);//key value change huda trigger hunxa 

  return [value, setValue];
}
