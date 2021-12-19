import React, { FC } from 'react';
import { useActions } from '../../hooks';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { AddCellContainer, Divider } from './AddCell.styled';

interface Props {
  nextCellId: string | null;
  forceVisible?: boolean;
  opacity?: number;
}

const AddCell: FC<Props> = ({
  nextCellId,
  forceVisible = false,
  opacity = 1,
}) => {
  const { insertCellBefore } = useActions();

  return (
    <AddCellContainer forceVisible={forceVisible} opacity={opacity}>
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

      <Divider />
    </AddCellContainer>
  );
};

export default AddCell;
