import React, { useId } from "react";

function FormWithUseId() { // linnks <label> and <input>
  const nameId = useId();    // Unique ID for the "name" input
  const emailId = useId();   // Unique ID for the "email" input

  return (
    <div>
      <h2>useId Example</h2>

      <div>
        <label htmlFor={nameId}>Name:</label>
        <input id={nameId} type="text" />
      </div>

      <div> {/* forms accessibility*/}
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" />
      </div>
    </div>
  );
}

export default FormWithUseId;
