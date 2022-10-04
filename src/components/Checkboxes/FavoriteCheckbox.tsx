import type { CheckboxProps } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React from "react";

const FavoriteCheckbox: React.FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      icon={<StarBorder sx={{ opacity: 0.5 }} />}
      checkedIcon={<Star htmlColor="#FFCD00" />}
      onClick={(e) => {
        e.stopPropagation();
        if (props.onClick) {
          props.onClick(e);
        }
      }}
      disableRipple
      {...props}
    />
  );
};

export default FavoriteCheckbox;
