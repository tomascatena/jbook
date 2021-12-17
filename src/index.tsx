import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './themes/defaultDarkTheme';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import CodeCell from './components/CodeCell/CodeCell';
import TextEditor from './components/TextEditor/TextEditor';
import { store } from './store/store';
import { Provider } from 'react-redux';

const MainLayout = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
}));

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Provider store={store}>
        <MainLayout>
          <CodeCell />

          <TextEditor />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
