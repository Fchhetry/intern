import { useEffect, useRef } from 'react';

export function usePrevious(value) {
  const ref = useRef(); //create a mutable ref
  useEffect(() => {
    ref.current = value; //update ref after render
  }, [value]);
  return ref.current; //return previous value
}
