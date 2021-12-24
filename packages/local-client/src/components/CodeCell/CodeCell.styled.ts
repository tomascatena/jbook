import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const CodeCellContainer = styled(Box)({
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
});

export const BundlingProgress = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  gap: '1rem',
});
