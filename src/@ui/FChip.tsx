import React, { memo } from "react";
import { Box, createStyles } from "@mantine/core";
import { TIcons, TImages } from "../types";
import { COLORS } from "../assets/colors/colors";
import FImage from "./FImage";

interface IProps {
  variant: "success" | "error" | "warning" | "default";
  title: string;
  icon?: TImages | TIcons;
  iconSize?: number;
  fontSize?: number;
  bg?: keyof typeof COLORS;
  color?: keyof typeof COLORS;
}

const FChip = (props: IProps) => {
  const {
    variant,
    title = "Need Feedback",
    icon,
    iconSize,
    fontSize,
    bg,
    color,
  } = props;

  const { classes } = styles();

  const getColorBgVarient = (
    value: typeof variant
    ) => {
    switch (value) {
      case "default":
        return { bg: COLORS.primaryLightOpacity, color: COLORS.secondary };
      case "success":
        return {
          bg: COLORS.successOpacityPointOne,
          color: COLORS.successOpacityOne,
        };
      case "warning":
        return {
          bg: COLORS.warningOpacityPointOne,
          color: COLORS.warningOpacityOne,
        };
      case "error":
        return {
          bg: COLORS.errorOpacityPointOne,
          color: COLORS.errorOpacityOne,
        };
    }
  };

  return (
    <Box
      className={`${classes.root} ${classes[variant ?? "default"]}`}
      style={{
        backgroundColor: bg ? COLORS[bg] : getColorBgVarient(variant).bg,
      }}
    >
      {icon && (
        <Box className={classes.iconContainer}>
          <FImage
            name={icon}
            alt=""
            width={iconSize}
            className={classes.icon}
          />
        </Box>
      )}

      <h6
        className={classes.title}
        style={{
          fontSize: fontSize,
          color: color ? COLORS[color] : getColorBgVarient(variant).color,
        }}
      >
        {title}
      </h6>
    </Box>
  );
};

export default memo(FChip);

const styles = createStyles({
  root: {
    padding: "4px 8px",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 5,
    display: "flex",
  },
  icon: {
    "@media(max-width:350px)": {
      width: "12px",
    },
  },
  default: {
    backgroundColor: COLORS.primaryLightOpacity,
    color: COLORS.secondary,
  },
  title: {
    margin: 0,
    fontSize: 8,
    fontWeight: 500,
    "@media(max-width:350px)": {
      fontSize: "10px !important",
    },
  },
  success: {
    backgroundColor: COLORS.successOpacityPointOne,
    color: COLORS.successOpacityOne,
  },
  error: {
    backgroundColor: COLORS.errorOpacityPointOne,
    color: COLORS.errorOpacityOne,
  },
  warning: {
    backgroundColor: COLORS.warningOpacityPointOne,
    color: COLORS.warningOpacityOne,
  },
});
