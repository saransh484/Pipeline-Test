import React, { memo } from "react";
import { TColors } from "../types";
import { COLORS } from "../assets/colors/colors";
import { Button, ButtonProps, createStyles } from "@mantine/core";

interface IProps extends ButtonProps {
  bg: TColors;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "smallBtn" | "mediumRadius" | "largeRadius";
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  textColor?: TColors;
}

const FButton = ({
  bg,
  label,
  textColor,
  variant,
  type = "button",
  disabled = false,
  onClick,
  loading = false,
  leftIcon,
  ...props
}: IProps) => {
  const styles = createStyles({
    root: {
      color: textColor,
      padding: "16px 24px",
      height: "auto",
      lineHeight: "inherit",
      backgroundColor: COLORS[bg],
      "&:hover": {
        backgroundColor: COLORS[bg],
      },
      "&:disabled": {
        cursor: "not-allowed",
        pointerEvents: "all",
        "&:hover": {
          backgroundColor: COLORS.disableButton_E9ECEF,
        },
      },
    },
    largeRadius: {
      borderRadius: 90,
    },
    smallBtn: {
      padding: "4px 10px",
      borderRadius: 4,
      fontSize: 12,
      "@media(max-width:650px)": {
        padding: "4px 6px",
      },
    },
    mediumRadius: {
      borderRadius: 8,
      padding: "8px 20px",
      fontSize: 12,
      fontWeight: 500,
    },
    leftIcon: {
      "@media(max-width:650px)": {
        marginRight: 2,
      },
    },
  });
  const { classes } = styles();
  return (
    <Button
      classNames={{
        root: `${classes.root} ${classes[variant ?? "mediumRadius"]}`,
        leftIcon: `${classes.leftIcon}`,
      }}
      type={type}
      fullWidth={true}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      styles={{
        label: {
          fontSize: 14,
          fontWeight: 700,
          color: COLORS[textColor ?? "white"],
        },
      }}
      sx={{
        "&:disabled": {
          color: COLORS.white,
          backgroundColor: COLORS.gray,
          fontFamily: "'Poppins', sans-serif !important",
          fontSize: 14,
          fontWeight: 700,
        },
      }}
      leftIcon={leftIcon}
      {...props}
    >
      {label ?? "Sign In"}
    </Button>
  );
};

export default memo(FButton);
