import { ActionIcon } from "@mantine/core";
import React, { memo } from "react";

interface IProps {
  icon?: React.ReactNode;
  variant?:
    | "gradient"
    | "transparent"
    | "subtle"
    | "filled"
    | "outline"
    | "light"
    | "default";
}

const FActionIconBtn = (props: IProps) => {
  const { icon, variant = "transparent" } = props;
  return <ActionIcon variant={variant}>{icon}</ActionIcon>;
};

export default memo(FActionIconBtn);
