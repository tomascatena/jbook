import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const FormatButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  right: '.5rem',
  top: '.5rem',
  opacity: 0,
  transition: 'opacity 0.3s',
  marginRight: theme.spacing(2),
}));

export const CodeEditorContainer = styled('div')({
  position: 'relative',
  width: 'calc(100% - 10px)',
  height: '100%',

  '&:hover > .MuiButton-root': {
    opacity: 1,
  },
});
