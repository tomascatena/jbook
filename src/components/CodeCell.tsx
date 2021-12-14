import React, { useState, FC } from 'react';
import CodeEditor from './CodeEditor';
import Button from '@mui/material/Button';
import Preview from './Preview';
import bundler from '../bundler';

const CodeCell: FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundler(input);

    setCode(output);
  };

  return (
    <>
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
    </>
  );
};

export default CodeCell;
