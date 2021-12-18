import React, { FC, useEffect } from 'react';
import { useTypedSelector, useActions } from '../../hooks';
import CellListItem from '../CellListItem/CellListItem';
import CodeCell from '../CodeCell/CodeCell';
import TextEditor from '../TextEditor/TextEditor';

interface Props {}

const CellList: FC = (props: Props) => {
  const { deleteCell, insertCellAfter, insertCellBefore } = useActions();

  const { data, order, loading, error } = useTypedSelector(
    (state) => state.cells
  );

  useEffect(() => {
    insertCellBefore({ id: null, type: 'code' });
    insertCellBefore({ id: null, type: 'text' });
    insertCellBefore({ id: null, type: 'code' });
  }, []);

  const cellsList = order.map((id) => data[id]);

  const renderedCells = cellsList.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <>{renderedCells}</>;
};

export default CellList;
