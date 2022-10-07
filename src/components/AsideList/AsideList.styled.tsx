import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Title = styled((props) => (
  <Typography variant="overline" {...props} />
))`
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: ${({ theme }) => theme.spacing(1)};

  .MuiDivider-root {
    margin: ${({ theme }) => theme.spacing(0, 0, 2, 1)};
  }
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
`;
