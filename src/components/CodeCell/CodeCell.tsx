import React, { useState, FC, useEffect } from 'react';
import CodeEditor from '../codeEditor/CodeEditor';
import Box from '@mui/material/Box';
import Preview from '../Preview/Preview';
import bundler from '../../bundler';
import Resizable from '../Resizable/Resizable';
import { Cell } from '../../store/cell';
import { useActions } from '../../hooks';
import { CodeCellContainer } from './CodeCell.styled';

interface Props {
  cell: Cell;
}

const CodeCell: FC<Props> = ({ cell }) => {
  const { updateCell } = useActions();

  const [code, setCode] = useState('');
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(cell.content);

      setCode(output.code);
      setErr(output.err);
    }, 800);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [cell.content]);

  return (
    <Box sx={{ marginBottom: '21px' }}>
      <Resizable direction="vertical">
        <CodeCellContainer>
          <Resizable direction="horizontal">
            <CodeEditor
              initialValue={cell.content}
              onChange={(value) => updateCell({ id: cell.id, content: value })}
            />
          </Resizable>

          <Preview code={code} bundlingStatus={err} />
        </CodeCellContainer>
      </Resizable>
    </Box>
  );
};

export default CodeCell;
