import React, { FC, useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { styled } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import './TextEditor.css';

const TextEditorContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

interface Props {}

const TextEditor: FC<Props> = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('# Header');
  const MDEditorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        MDEditorRef.current &&
        event.target &&
        MDEditorRef.current.contains(event.target as Node)
      ) {
        setEditing(true);
      } else {
        setEditing(false);
      }
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <TextEditorContainer className='text-editor' ref={MDEditorRef}>
        <MDEditor onChange={(v) => setValue(v || '')} />
      </TextEditorContainer>
    );
  }

  return (
    <TextEditorContainer
      className='text-editor'
      onClick={() => setEditing(true)}
    >
      <Card variant='outlined'>
        <CardContent>
          <MDEditor.Markdown source={value} />
        </CardContent>
      </Card>
    </TextEditorContainer>
  );
};

export default TextEditor;
