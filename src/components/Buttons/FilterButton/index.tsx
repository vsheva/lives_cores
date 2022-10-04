import { Button } from "@mui/material";
import styled from "styled-components";

const FilterButton = styled((props) => (
  <Button variant="contained" {...props} />
))<{ active: boolean }>`
  line-height: 1.6;
  pointer-events: ${({ active }) => active && "none"};
  color: ${({ theme, active }) =>
    active ? theme.palette.primary.contrastText : theme.palette.text.secondary};
  background-color: ${({ theme, active }) =>
    active ? theme.palette.primary.main : theme.palette.background.default};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

export default FilterButton;
