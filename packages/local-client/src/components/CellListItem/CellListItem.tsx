import React, { FC } from 'react';
import { Cell } from '../../store/cell';
import ActionBar from '../ActionBar/ActionBar';
import CodeCell from '../CodeCell/CodeCell';
import TextEditor from '../TextEditor/TextEditor';
import {
  CellListItemContainer,
  ActionBarWrapper,
} from './CellListItems.styled';

interface Props {
  cell: Cell;
}

const CellListItem: FC<Props> = ({ cell }) => {
  let child: JSX.Element = <></>;

  if (cell.type === 'code') {
    child = (
      <>
        <ActionBarWrapper>
          <ActionBar cellId={cell.id} />
        </ActionBarWrapper>

        <CodeCell cell={cell} />
      </>
    );
  } else if (cell.type === 'text') {
    child = (
      <>
        <ActionBar cellId={cell.id} />

        <TextEditor cell={cell} />
      </>
    );
  }

  return <CellListItemContainer>{child}</CellListItemContainer>;
};

export default CellListItem;
