import React, { FC } from 'react';
import { useActions } from '../../hooks';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddCellContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible?: boolean }>(({ theme, isVisible }) => ({
  position: 'relative',
  marginBlock: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(20),
  justifyContent: 'center',
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 0.3s',

  '&:hover': {
    opacity: 1,
  },

  '& > .MuiButton-root': {
    zIndex: 2,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '100rem',

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

const Divider = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  bottom: '50%',
  borderBottom: '1px solid',
  width: '80%',
  zIndex: 1,
}));

interface Props {
  nextCellId: string | null;
  isVisible?: boolean;
}

const AddCell: FC<Props> = ({ nextCellId, isVisible = false }) => {
  const { insertCellBefore } = useActions();

  return (
    <AddCellContainer isVisible={isVisible}>
      <Button
        startIcon={<AddIcon />}
        size="small"
        variant="outlined"
        onClick={() => insertCellBefore({ id: nextCellId, type: 'code' })}
      >
        Code
      </Button>

      <Button
        startIcon={<AddIcon />}
        size="small"
        variant="outlined"
        onClick={() => insertCellBefore({ id: nextCellId, type: 'text' })}
      >
        MarkDown
      </Button>

      <Divider></Divider>
    </AddCellContainer>
  );
};

export default AddCell;
