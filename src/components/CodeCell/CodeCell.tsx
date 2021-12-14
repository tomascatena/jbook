import React, { useState, FC } from 'react';
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

  const onClick = async () => {
    const output = await bundler(input);

    setCode(output);
  };

  return (
    <Resizable direction='vertical'>
      <CodeCellContainer>
        <CodeEditor
          initialValue='const a = 1;'
          onChange={(value) => setInput(value)}
        />

        <Preview code={code} />
      </CodeCellContainer>
    </Resizable>
  );
};

export default CodeCell;
