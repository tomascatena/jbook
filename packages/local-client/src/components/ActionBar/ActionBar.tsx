import React, { FC } from 'react';
import { useActions } from '../../hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { ActionBarContainer } from './ActionBar.styled';

interface Props {
  cellId: string;
}

const ActionBar: FC<Props> = ({ cellId }) => {
  const { deleteCell, moveCell, removeBundle } = useActions();

  const handleDeleteCell = () => {
    deleteCell(cellId);
    removeBundle(cellId);
  };

  return (
    <ActionBarContainer>
      <ButtonGroup size="small" disableElevation variant="contained">
        <Button
          startIcon={<ArrowUpwardIcon />}
          onClick={() => moveCell({ id: cellId, direction: 'up' })}
        ></Button>

        <Button
          startIcon={<ArrowDownwardIcon />}
          onClick={() => moveCell({ id: cellId, direction: 'down' })}
        ></Button>

        <Button startIcon={<DeleteIcon />} onClick={handleDeleteCell}></Button>
      </ButtonGroup>
    </ActionBarContainer>
  );
};

export default ActionBar;
