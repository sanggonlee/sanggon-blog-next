import { AppProps } from 'next/app';
import SnackbarProvider from 'react-simple-snackbar';
import GlobalStyles from '../lib/globalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default App;
