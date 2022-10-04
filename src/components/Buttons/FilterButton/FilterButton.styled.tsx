import { Button } from "@mui/material";
import styled from "styled-components";

export const FilterButton = styled((props) => (
  <Button variant="contained" {...props} />
))<{ active: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.palette.primary.contrastText : theme.palette.text.secondary};
  background-color: ${({ theme, active }) =>
    active ? theme.palette.primary.main : theme.palette.background.default};
`;
