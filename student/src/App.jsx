import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import StudentList from './features/pages/StudentList';
import CreateEditStudent from './features/pages/CreateEditStudent';
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
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/create" element={<CreateEditStudent />} />
            <Route path="/edit/:id" element={<CreateEditStudent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
