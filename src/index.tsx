import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './components/CodeEditor';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './themes/defaultDarkTheme';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Preview from './components/Preview';
import bundler from './bundler';

const MainLayout = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
}));

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundler(input);

    setCode(output);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <MainLayout>
        <Container sx={{ marginBlock: 2 }}>
          <CodeEditor
            initialValue='const a = 1;'
            onChange={(value) => setInput(value)}
          />

          <div>
            <Button variant='outlined' onClick={onClick}>
              Submit
            </Button>
          </div>

          <Preview code={code} />
        </Container>
      </MainLayout>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
