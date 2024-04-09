import { Button, createStyles } from "@mantine/core";
import React, { memo } from "react";
import { COLORS } from "../../assets/colors/colors";

interface ICustomButton {
  label: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  padding?: number;
  borderColor?: string;
}

const IconButton = (props: ICustomButton) => {
  const {
    label,
    disabled = false,
    onClick,
    padding = 16,
    borderColor = "transparent",
  } = props;

  const styles = createStyles({
    root: {
      paddingTop: padding,
      paddingBottom: padding,
      paddingRight: padding,
      paddingLeft: padding,
      backgroundColor: "transparent",
      borderColor: borderColor,
      height: "auto",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    label: {
      fontSize: 11,
      fontWeight: 500,
      color: COLORS.primary,
    },
  });

  const { classes } = styles();
  return (
    <Button
      classNames={{
        root: classes.root,
        label: classes.label,
      }}
      disabled={disabled}
      variant="outline"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default memo(IconButton);
