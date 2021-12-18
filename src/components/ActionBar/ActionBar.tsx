import React, { FC } from 'react';
import { useActions } from '../../hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/system';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ActionBarContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
  opacity: 0.3,
  transition: 'opacity 0.3s',

  '.MuiButton-startIcon': {
    margin: 0,
  },

  '.MuiButtonGroup-root .MuiButton-root': {
    borderRadius: 0,
  },

  '&:hover': {
    opacity: 1,
  },
}));

interface Props {
  cellId: string;
}

const ActionBar: FC<Props> = ({ cellId }) => {
  const { deleteCell, moveCell } = useActions();

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

        <Button
          startIcon={<DeleteIcon />}
          onClick={() => deleteCell(cellId)}
        ></Button>
      </ButtonGroup>
    </ActionBarContainer>
  );
};

export default ActionBar;
