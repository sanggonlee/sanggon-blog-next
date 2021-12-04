import { useSnackbar as useSimpleSnackbar } from 'react-simple-snackbar';

type SnackbarStyle = 'info' | 'error';

type OpenSnackbar = (message: string) => void;
type CloseSnackbar = () => void;

const bgColor: Record<SnackbarStyle, string> = Object.freeze({
  info: '',
  error: 'red',
});

export default function useSnackbar(
  style: SnackbarStyle = 'info',
): [OpenSnackbar, CloseSnackbar] {
  const [open, close]: [OpenSnackbar, CloseSnackbar] = useSimpleSnackbar({
    style: {
      backgroundColor: bgColor[style],
      fontWeight: 'bold',
    },
  });

  return [open, close];
}
