import type { Theme } from '@mui/system';
import { createGlobalStyle, ThemeProps } from 'styled-components';

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  html,
  body,
  #root {
    height: 100%;
    font-size: 14px;
  }

  body {
    background: ${props => props.theme.palette.background.default};
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export default GlobalStyle;
