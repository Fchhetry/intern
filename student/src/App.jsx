import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import StudentList from './features/pages/StudentList';
//import StudentTable from './features/feature1/components/Component1/StudentTable';
import store from './store/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <StudentList />
          {/*StudentTable / */}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;