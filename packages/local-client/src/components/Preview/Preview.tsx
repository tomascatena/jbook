import React, { FC, useEffect, useRef } from 'react';
import { IframeContainer, PreviewError } from './Preview.styled';

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
      const handleError = (err) => {
        const root = document.querySelector('#root');
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';

        console.error(err);
      };

      window.addEventListener('error', (event) => {
        event.preventDefault(); // for the browser not to print out the error in the console
        handleError(event.error);
      })

      window.addEventListener("message", (event) => {
        try {
          eval(event.data);
        } catch (err) {
          handleError(err)
        }
      }, false);
    </script>
  </body>
</html>
`;

interface Props {
  code: string;
  bundlingStatus: string | null;
}

const Preview: FC<Props> = ({ code, bundlingStatus }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;

    if (iframe.current) {
      setTimeout(() => {
        iframe.current.contentWindow.postMessage(code, '*');
      }, 50);
    }
  }, [code]);

  return (
    <IframeContainer>
      <iframe
        title="preview"
        sandbox="allow-scripts"
        srcDoc={html}
        ref={iframe}
      />

      {bundlingStatus && <PreviewError>{bundlingStatus}</PreviewError>}
    </IframeContainer>
  );
};

export default Preview;
