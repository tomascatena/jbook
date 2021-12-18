import React, { FC, useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useActions } from '../../hooks';
import './TextEditor.css';
import { Cell } from '../../store/cell';

interface Props {
  cell: Cell;
}

const TextEditor: FC<Props> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActions();

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
      <div className="text-editor" ref={MDEditorRef}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell({ id: cell.id, content: v || '' })}
        />
      </div>
    );
  }

  return (
    <div className="text-editor" onClick={() => setEditing(true)}>
      <Card variant="outlined">
        <CardContent>
          <MDEditor.Markdown source={cell.content || '## Click to edit'} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TextEditor;
