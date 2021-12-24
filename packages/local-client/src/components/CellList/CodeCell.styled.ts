import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const CellListWrapper = styled(Box)(({ theme }) => ({
  margin: `0 ${theme.spacing(3)}`,

  '.react-draggable-transparent-selection &': {
    marginBottom: '100vh',
  },
}));
