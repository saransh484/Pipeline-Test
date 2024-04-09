import { Box, Loader } from "@mantine/core";
import React from "react";

interface IProps {
  variant?: "bars" | "dots" | "oval";
  size?: "lg" | "md" | "sm" | "xl" | "xs";
}

const FLoading = (props: IProps) => {
  const { variant = "bars", size = "md" } = props;
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Loader variant={variant} size={size} />
    </Box>
  );
};

export default FLoading;
