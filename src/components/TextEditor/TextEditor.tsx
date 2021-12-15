import React, { FC, useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';

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
      <div ref={MDEditorRef}>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={'# Header'} />
    </div>
  );
};

export default TextEditor;
