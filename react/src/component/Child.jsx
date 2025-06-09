import React, { useRef, forwardRef, useImperativeHandle } from "react";

const ChildInput = forwardRef((props, ref) => {
  const inputRef = useRef(null); //internal reef to access the input

  // Expose focusInput method to parent
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus(); //focus on input
    }
  }));
 //render the input and connect it to inputRef
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Click the button to focus me"
    />
  );
});

export default ChildInput;
