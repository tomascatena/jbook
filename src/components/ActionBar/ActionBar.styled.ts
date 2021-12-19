import { styled } from '@mui/system';

export const ActionBarContainer = styled('div')({
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
});
