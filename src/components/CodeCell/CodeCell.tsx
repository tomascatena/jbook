import React, { useState, FC, useEffect } from 'react';
import CodeEditor from '../codeEditor/CodeEditor';
import Box from '@mui/material/Box';
import Preview from '../Preview/Preview';
import bundler from '../../bundler';
import { styled } from '@mui/system';
import Resizable from '../Resizable/Resizable';

const CodeCellContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
}));

const CodeCell: FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(input);

      setCode(output.code);
      setErr(output.err);
    }, 800);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <CodeCellContainer>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue='const a = 1;'
            onChange={(value) => setInput(value)}
          />
        </Resizable>

        <Preview code={code} bundlingStatus={err} />
      </CodeCellContainer>
    </Resizable>
  );
};

export default CodeCell;
