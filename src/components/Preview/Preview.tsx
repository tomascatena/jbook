import React, { FC, useEffect, useRef } from 'react';

interface Props {
  code: string;
}

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

const Preview: FC<Props> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
  }, [code]);

  if (iframe.current) {
    iframe.current.contentWindow.postMessage(code, '*');
  }

  return (
    <iframe
      style={{ backgroundColor: '#fff' }}
      title='preview'
      sandbox='allow-scripts'
      srcDoc={html}
      ref={iframe}
    />
  );
};

export default Preview;
