import type { FC, ReactNode } from "react";
import type { Theme } from "@mui/material";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";

interface IThemeProviderProps {
  children: ReactNode;
  theme: Theme;
  emotionCache: EmotionCache;
}

const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  theme,
  emotionCache,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        <StyledComponentProvider theme={theme}>
          {children}
        </StyledComponentProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
