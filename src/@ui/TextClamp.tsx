import React, { memo } from "react";
import { Box, createStyles } from "@mantine/core";

interface IProps {
  children: string | JSX.Element | JSX.Element[];
  lines?: number;
}

const TextClamp = ({ children, lines }: IProps) => {
  const styles = createStyles({
    clamp: {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines ?? 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  });

  const { classes } = styles();
  return <Box className={classes.clamp}>{children}</Box>;
};

export default memo(TextClamp);
