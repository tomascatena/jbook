import React, { FC } from 'react';
import { Cell } from '../../store/cell';
import CodeCell from '../CodeCell/CodeCell';
import TextEditor from '../TextEditor/TextEditor';

interface Props {
  cell: Cell;
}

const CellListItem: FC<Props> = ({ cell }) => {
  let child: JSX.Element = <></>;

  if (cell.type === 'code') {
    child = <CodeCell />;
  } else if (cell.type === 'text') {
    child = <TextEditor />;
  }

  return <>{child}</>;
};

export default CellListItem;
