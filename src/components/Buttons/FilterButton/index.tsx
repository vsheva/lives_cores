import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

type FilterButtonProps = { $active?: boolean };

const FilterButton = styled((props: ButtonProps & FilterButtonProps) => (
  <Button variant="contained" {...props} />
))<FilterButtonProps>`
  line-height: 1.6;
  pointer-events: ${({ $active }) => $active && "none"};
  color: ${({ theme, $active }) =>
    $active
      ? theme.palette.primary.contrastText
      : theme.palette.text.secondary};
  background-color: ${({ theme, $active }) =>
    $active ? theme.palette.primary.main : theme.palette.background.default};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

export default FilterButton;
