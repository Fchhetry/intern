import React, { useRef } from "react";

function RefFocusInput() {
    //reference to input element
  const inputRef = useRef(null);
    //ocus on input beig called
  const handleFocus = () => {
    inputRef.current.focus();//access DOM element
  };

  return (
    <>
    <h2>useRef demo</h2>
      {/*input is connected to the ref */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <br /><br />
      {/* yo button click garesi input gets focused */}
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}

export default RefFocusInput;