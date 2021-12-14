import React, { useState, FC } from 'react';
import CodeEditor from './CodeEditor';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Preview from './Preview';
import bundler from '../bundler';
import { styled } from '@mui/system';
import Resizable from './Resizable';

const CodeCellContainer = styled(Box)(({ theme }) => ({}));

const CodeCell: FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundler(input);

    setCode(output);
  };

  return (
    <CodeCellContainer>
      <Resizable direction='vertical'>
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
      </Resizable>
    </CodeCellContainer>
  );
};

export default CodeCell;
