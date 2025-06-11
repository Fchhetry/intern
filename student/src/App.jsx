import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import StudentList from './features/page/StudentList';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StudentList />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
