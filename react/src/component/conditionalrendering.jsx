import React, { useState } from 'react';
//using ternary ooperator
function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);//setIsLoggedIn a function that can update isLoggedIn , default value is false meaning login garnu bhanxa

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
//using logical && operator
function Logical() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      <h1>Welcome to the site</h1>
      {isLoggedIn && <p>You are now logged in.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

//using if operator
function IfOp() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  let message;
  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Please log in.</h1>;
  }

  return (
    <div>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

//using show and hide
function WelcomePanel() {
  return <div>👋 Welcome to your dashboard!</div>;
}

function ShowHide() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      <h1>Conditional Rendering Show/Hide Demo</h1>

      {isLoggedIn && <WelcomePanel />}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export { IfOp, Greeting, Logical, ShowHide };
