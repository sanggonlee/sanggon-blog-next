import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import SnackbarProvider from 'react-simple-snackbar';
import GlobalStyles from '../lib/globalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </SnackbarProvider>
  );
}

export default App;
