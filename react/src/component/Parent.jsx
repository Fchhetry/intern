import React, { useRef } from "react";
import ChildInput from "./Child";
function ParentComponent() {
  const childRef = useRef(null);//creating ref that will talk to child

  const handleFocus = () => {
    childRef.current.focusInput(); // Call the child method exposed by the child
  };

  return (
    <>
      <h2>useImperativeHandle demo</h2>
      <ChildInput ref={childRef} /> {/*pass ref to the child */}
      <br /><br />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}

export default ParentComponent;
