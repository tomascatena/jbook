import React, { FC, Fragment, useEffect } from 'react';
import { useTypedSelector } from '../../hooks';
import CellListItem from '../CellListItem/CellListItem';
import AddCell from '../AddCell/AddCell';
import { CellListWrapper } from './CodeCell.styled';
import { useAppDispatch } from '../../hooks';
import { fetchCells } from '../../store/features/cells/cellsSlice.thunk';

interface Props {}

const CellList: FC = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCells());
  }, []);

  const { data, order } = useTypedSelector((state) => state.cells);

  const cellsList = order.map((id) => data[id]);

  const renderedCells = cellsList.map((cell) => {
    return (
      <Fragment key={cell.id}>
        <CellListItem cell={cell} />

        <AddCell previousCellId={cell.id} />
      </Fragment>
    );
  });

  renderedCells.push();

  return (
    <CellListWrapper>
      <AddCell
        forceVisible
        opacity={cellsList.length === 0 ? 1 : 0}
        previousCellId={null}
      />

      {renderedCells}
    </CellListWrapper>
  );
};

export default CellList;
