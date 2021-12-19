import React, { FC, useEffect } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { AddCellContainer, Divider } from './AddCell.styled';

interface Props {
  previousCellId: string | null;
  forceVisible?: boolean;
  opacity?: number;
}

const AddCell: FC<Props> = ({
  previousCellId,
  forceVisible = false,
  opacity = 1,
}) => {
  const { insertCell } = useActions();

  const { order } = useTypedSelector((state) => state.cells);

  useEffect(() => {
    if (previousCellId === order[order.length - 1]) {
      console.log(previousCellId, order);

      window.scrollTo({
        top: window.document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AddCellContainer forceVisible={forceVisible} opacity={opacity}>
      <Button
        startIcon={<AddIcon />}
        size="small"
        variant="outlined"
        onClick={() => insertCell({ id: previousCellId, type: 'code' })}
      >
        Code
      </Button>

      <Button
        startIcon={<AddIcon />}
        size="small"
        variant="outlined"
        onClick={() => insertCell({ id: previousCellId, type: 'text' })}
      >
        MarkDown
      </Button>

      <Divider />
    </AddCellContainer>
  );
};

export default AddCell;
