import * as React from 'react';
import type { AppProps } from 'next/app';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';

import createEmotionCache from '@theme/createEmotionCache';
import ThemeProvider from '@theme/ThemeProvider';
import theme from '@theme';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>Livescores</title>
        <meta name="description" content="Live sport matches" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme} emotionCache={emotionCache}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default MyApp;
