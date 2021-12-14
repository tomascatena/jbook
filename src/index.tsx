import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './themes/defaultDarkTheme';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CodeCell from './components/CodeCell';

const MainLayout = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
}));

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <MainLayout>
        <Container sx={{ marginBlock: 2 }}>
          <CodeCell />
        </Container>
      </MainLayout>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
