import type { ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import React from "react";

import * as Styled from "./FilterButton.styled";

export type FilterButtonProps = {
  active?: boolean;
};

const FilterButton: ExtendButtonBase<
  ButtonTypeMap<FilterButtonProps, "button">
> = ({ active = false, ...props }) => {
  return <Styled.FilterButton active={active} {...props} />;
};

export default FilterButton;
