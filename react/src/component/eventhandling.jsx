import React, { useState } from 'react';

function LoginForm() { //component login form
  const [email, setEmail] = useState('');// email stores the value typed by the user,setEmail updates the email,initially empty
  const [password, setPassword] = useState('');//same as email

  const handleLogin = (e) => {//form submit bhayeasi run hunxa, 
    e.preventDefault(); // Prevents page reload
    console.log('Email:', email);
    console.log('Password:', password);

    if (email === 'pooja@example.com' && password === '1234') { //yo validation ko chai API call garney as of now this checks if email and password match bhako xa ki nai
      alert('Login successful!');
    } else {
      alert('Invalid email or password');
    }
  };

  //form reset
  const handleReset = () => {
    setEmail('');
    setPassword('');
    alert('Form has been reset');
  };

//input validation
  const handleInvalid = (e) => {
    e.preventDefault();
    alert(`Invalid input: ${e.target.name} is required`);
  };

// when login button clicked (before submit)
  const handleClick = () => {
    console.log('Login button clicked');
  };

   return ( //UI
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>

      {/* onSubmit + onReset */}
      {/*login click garda call hunxa*/}
      <form onSubmit={handleLogin} onReset={handleReset}> 
        <div>
          <label>Email: </label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //onchage le chai email ko state type garda change garidinxa, required means must be filled
            onInvalid={handleInvalid}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password: </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            onInvalid={handleInvalid}
            required
          />
          </div>

        <div style={{ marginTop: '15px' }}>
          {/* onClick */}
          <button type="submit" onClick={handleClick}>
            Login
          </button>

          {/* Reset button */}
          <button type="reset" style={{ marginLeft: '10px' }}>
            Reset
          </button>
        </div>
    </form>
    </div>
   );
}

export default LoginForm;