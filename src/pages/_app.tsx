import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
