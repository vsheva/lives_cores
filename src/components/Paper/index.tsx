import { PaperProps } from "@mui/material";
import React from "react";

import * as Styled from "./Paper.styled";

const Paper: React.FC<PaperProps> = (props) => {
  return <Styled.Paper {...props} />;
};

export default Paper;
