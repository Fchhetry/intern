import React from 'react';
import Functional from '../../react/src/component/Functional';
import Counter from '../../react/src/component/counter';
import Message from '../../react/src/component/Messages';
import Card from '../../react/src/component/Card';
import { Greeting, Logical, IfOp, ShowHide } from '../../react/src/component/conditionalrendering';
import IplList from './component/renderlist';
import LoginForm from './component/eventhandling';
import ExUseEffect from '../../react/src/component/effect';
import ExUseLayoutEffect from '../../react/src/component/layouteffect';
function App() {
  const names = ['Pooja', 'Ravi', 'Anjali'];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Combined React App</h1>

      {/*conditional rendering */}
      <Card>
      <div style={{ padding: '20px' }}>
      <h1>React Conditional Rendering Examples</h1>

      <hr />
      <h2>1. Ternary Operator:</h2>
      <Greeting />
       <hr />
      <h2>2. Logical && Operator:</h2>
      <Logical />

      <hr />
      <h2>3. If Statement:</h2>
      <IfOp />

      <hr />
      <h2>4. Show/Hide Component:</h2>
      <ShowHide />
      </div>
 </Card>

  <Card>
      {/*useEffect and useLayoutEffect*/}
      <div style={{ padding: '20px' }}>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>useEffect Example</h2>
        <ExUseEffect />
      </section>
      
      <section>
        <h2>useLayoutEffect Example</h2>
        <ExUseLayoutEffect />
      </section>
    </div>
</Card>

    {/*event handling */}
    <Card>
      <div>
      <LoginForm />
    </div>
    </Card>
{/*Rendering list with .map() */}
<Card>
  <div>
      <h1>Here's a list of ipl tems</h1>
      <IplList />
    </div>
</Card>


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
