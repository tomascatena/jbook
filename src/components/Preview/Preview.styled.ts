import { styled } from '@mui/system';

export const IframeContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  flex: 1,

  '.react-draggable-transparent-selection &:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
  },

  iframe: {
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
  },
}));

export const PreviewError = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  color: 'red',
  backgroundColor: '#fff',
  height: '100%',
  width: '100%',
  padding: theme.spacing(1),
}));
