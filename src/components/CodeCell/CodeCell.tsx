import React, { FC, useEffect } from 'react';
import CodeEditor from '../codeEditor/CodeEditor';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Preview from '../Preview/Preview';
import Resizable from '../Resizable/Resizable';
import { Cell } from '../../store/cell';
import { useActions, useTypedSelector, useAppDispatch } from '../../hooks';
import { CodeCellContainer, BundlingProgress } from './CodeCell.styled';
import { createBundle } from '../../store/features/bundles/bundles.thunk';

interface Props {
  cell: Cell;
}

const CodeCell: FC<Props> = ({ cell }) => {
  const { updateCell } = useActions();
  const dispatch = useAppDispatch();

  const bundle = useTypedSelector(
    (state) => state.bundles.cellBundles[cell.id]
  );

  useEffect(() => {
    const timer = setTimeout(async () => {
      dispatch(
        createBundle({
          cellId: cell.id,
          rawCode: cell.content,
        })
      );
    }, 800);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
    // eslint-disable-next-line
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

          {!bundle || bundle?.isBundling ? (
            <BundlingProgress>
              <CircularProgress />

              <Typography variant="h6" component="div">
                {!bundle ? 'Loading' : 'Bundlig code'}...
              </Typography>
            </BundlingProgress>
          ) : (
            bundle && <Preview code={bundle.code} bundlingStatus={bundle.err} />
          )}
        </CodeCellContainer>
      </Resizable>
    </Box>
  );
};

export default CodeCell;
