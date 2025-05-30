import React from 'react';
import Functional from './Functional';
import Counter from './counter';
import Message from './Messages';
import Card from './Card';

function App() {
  const names = ['Pooja', 'Ravi', 'Anjali'];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Combined React App</h1>

      {/* Message with props */}
      <Card>
        <h2>Props Example</h2>
        <Message name="Pooja" />
        <Message name="React Learner" />
      </Card>

      {/* Functional component */}
      <Card>
        <Functional />
      </Card>

      {/* Class component */}
      <Card>
        <Counter />
      </Card>

      {/* Rendering list */}
      <Card>
        <h2>List of Names</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default App;
