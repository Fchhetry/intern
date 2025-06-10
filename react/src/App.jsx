import React from 'react';
import Functional from '../../react/src/component/Functional';
import Counter from '../../react/src/component/counter';
import Message from '../../react/src/component/Messages';
import Card from '../../react/src/component/Card';
import { Greeting, Logical, IfOp, ShowHide } from '../../react/src/component/conditionalrendering';
import IplList from './component/renderlist';
import LoginForm from './component/Eventhandling';
import ExUseEffect from '../../react/src/component/effect';
import ExUseLayoutEffect from '../../react/src/component/layouteffect';
import Lifecycle from './component/Lifecycle';
import Fetch from './component/fetch';
import Axios from './component/axios';
import LoadNError from './component/LoadError';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Callback from './component/CallbacK';
import { ThemeProvider } from './component/ThemeContext';
import ChildComponent from './component/ChildComponent';
import CounterReducer from './component/Reducer';
import FormWithUseId from './component/Id';
import TodoList from './component/Todo';
import CounterWithCalc from './component/Calc';
import ParentComponent from "./component/Parent"; 
import Stopwatch from './component/Ref';
import UserList from './component/UserList';
import NameSaver from './component/NameSaver';
import PreviousValueTracker from './component/PreviousValueTracker';
import { Addition } from './counter/Addition';
import { Provider } from 'react-redux';
import { store } from './app/Store';
function App() {
  const names = ['Pooja', 'Ravi', 'Anjali'];

  return (
   <Provider store={store}>
    <div style={{ padding: '20px' }}>
      <h1>Combined React App</h1>
<></>
<RouterProvider router={AppRoutes} />
    {/*Custom Hooks Demo */}
    <Card>
     <h2>Custom Hooks Demo</h2>
      <UserList />
      <hr />
      <NameSaver />
      <hr />
      <PreviousValueTracker /> 
    </Card>

    {/* REDUX */}
    <Card>
      <h2>Redux Addition</h2>
      <Addition />
    </Card>   


    {/*useImperative Handle*/}
    <Card>
    <div className="App">
      <ParentComponent />
    </div>
    </Card>

    {/*useMemo demo */}
    <Card>
    <TodoList />
    </Card>

    {/*useSate */}
    <Card>
    <CounterWithCalc />
    </Card>

    {/*useID hook*/}
    <Card>
    <FormWithUseId />
    </Card>

    {/*useReducer hook*/}
    <Card>
      <CounterReducer />
    </Card>

    {/*useRef hook*/}
    <Card>
      <Stopwatch />
    </Card>

    {/*useContext demo1*/}
    <Card>
    <ThemeProvider>
      <h2>useContext Example</h2>
      <ChildComponent />
    </ThemeProvider>
    </Card>
    {/*callback */}
    <Card>
      <h2>useCallback demo</h2>
      <Callback />
    </Card>
    
    {/*Loading and Error states */}
    <Card>
      <h2>Displaying loading and error states</h2>
      <LoadNError />
    </Card>

    {/*Fetch API */}
    <Card>
      <h2>API fetching</h2>
      <Fetch />
    </Card>

    {/*Axios */}
    <Card>
      <h2>API axios</h2>
      <Axios />
    </Card>

    {/*Lifecyle of components */}
    <Card>
      <div>
        <h1>React Lifecycle Example</h1>
        <Lifecycle />
      </div>
    </Card>
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
    </Provider>
  );
}

export default App;
