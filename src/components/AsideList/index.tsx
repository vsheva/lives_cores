import React from "react";
import { Divider } from "@mui/material";

import * as Styled from "./AsideList.styled";

type AsideListProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const AsideList: React.FC<AsideListProps> = ({ title, children }) => {
  return (
    <>
      <Styled.Title>
        {title}
        <Divider />
      </Styled.Title>
      <Styled.Content>{children}</Styled.Content>
    </>
  );
};

export default AsideList;
