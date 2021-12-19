import { styled } from '@mui/system';

export const CellListItemContainer = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const ActionBarWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: theme.spacing(3),
  backgroundColor: '#37414b',
}));
