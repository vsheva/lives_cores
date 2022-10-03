import * as React from "react";
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import createEmotionCache from "@theme/createEmotionCache";
import ThemeProvider from "@theme/ThemeProvider";
import theme from "@theme";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ThemeProvider theme={theme} emotionCache={emotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
