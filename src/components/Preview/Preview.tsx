import React, { FC, useEffect, useRef } from 'react';
import { styled } from '@mui/system';

const IframeContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  flex: 1,

  '.react-draggable-transparent-selection &:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
  },

  iframe: {
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
  },
}));

const html = `
<html>
  <head>
    <style>
      html {
        background-color: '#fff'
      }
    </style>
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

interface Props {
  code: string;
}

const Preview: FC<Props> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
  }, [code]);

  if (iframe.current) {
    iframe.current.contentWindow.postMessage(code, '*');
  }

  return (
    <IframeContainer>
      <iframe
        title='preview'
        sandbox='allow-scripts'
        srcDoc={html}
        ref={iframe}
      />
    </IframeContainer>
  );
};

export default Preview;
