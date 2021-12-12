import * as esbuild from 'esbuild-wasm';
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './components/CodeEditor';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './themes/defaultDarkTheme';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

const MainLayout = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
}));

const App = () => {
  const ref = useRef<any>();
  const iframe = useRef<any>();
  const [input, setInput] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    iframe.current.srcdoc = html;

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    // setCode(result.outputFiles[0].text);
    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
  };

  const html = `
  <html>
    <head>
    </head>
    
    <body>
      <div id="root"></div>

      <script>
        window.addEventListener("message", (event) => {
          try {
            eval(event.data);
          } catch (err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          }
        }, false);
      </script>
    </body>
  </html>
  `;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <MainLayout>
        <Container sx={{ marginBlock: 2 }}>
          <CodeEditor
            initialValue='const a = 1;'
            onChange={(value) => setInput(value)}
          />

          <textarea
            rows={10}
            cols={70}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div>
            <Button variant='outlined' onClick={onClick}>
              Submit
            </Button>
          </div>

          <iframe
            ref={iframe}
            sandbox='allow-scripts'
            title='preview'
            srcDoc={html}
          />
        </Container>
      </MainLayout>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
