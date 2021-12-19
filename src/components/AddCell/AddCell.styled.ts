import { styled } from '@mui/system';

export const AddCellContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'forceVisible' && prop !== 'opacity',
})<{ forceVisible?: boolean; opacity: number | undefined }>(
  ({ theme, forceVisible, opacity }) => ({
    position: 'relative',
    marginBlock: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(20),
    justifyContent: 'center',
    opacity: forceVisible ? opacity : 0,
    transition: 'opacity 0.3s ease-in .1s',

    '&:hover': {
      opacity: 1,
    },

    '&:active': {
      opacity: 1,
      transition: 'opacity 0s',
    },

    '& > .MuiButton-root': {
      zIndex: 2,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '100rem',

      '&:hover': {
        backgroundColor: theme.palette.background.paper,
      },
    },
  })
);

export const Divider = styled('div')({
  position: 'absolute',
  top: '50%',
  bottom: '50%',
  borderBottom: '1px solid',
  width: '80%',
  zIndex: 1,
});
