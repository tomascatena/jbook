import React, { FC, useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { styled } from '@mui/system';

import './TextEditor.css';

const TextEditorContainer = styled('div')(({ theme }) => ({
  '.w-md-editor-bar svg': {
    display: 'none',
  },

  '.w-md-editor-bar': {
    position: 'relative',
    width: '100%',
    height: '11px',
    cursor: 'row-resize',
    backgroundColor: '#37414b',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=")`,
  },
}));

interface Props {}

const TextEditor: FC<Props> = () => {
  const [editing, setEditing] = useState(false);
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
      <TextEditorContainer ref={MDEditorRef}>
        <MDEditor />
      </TextEditorContainer>
    );
  }

  return (
    <TextEditorContainer onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={'# Header'} />
    </TextEditorContainer>
  );
};

export default TextEditor;
