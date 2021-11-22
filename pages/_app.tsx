import { AppProps } from 'next/app';
import GlobalStyles from '../lib/globalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
