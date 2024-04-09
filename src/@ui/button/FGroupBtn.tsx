import { Button, createStyles } from "@mantine/core";
import React, { Fragment, memo } from "react";
import { COLORS } from "../../assets/colors/colors";

interface IFGroupBtn {
  button: {
    label: string;
    onClick?: () => void;
    active?: boolean;
  }[];
  variant?:
    | "default"
    | "filled"
    | "gradient"
    | "light"
    | "outline"
    | "white"
    | "default"
    | "subtle";
}

const FGroupBtn = (props: IFGroupBtn) => {
  const { variant, button } = props;
  const { classes } = useStyles();
  return (
    <Fragment>
      <Button.Group>
        {button.map((item, index) => (
          <Button
          key={index}
            classNames={{
              root: `${classes.root} ${item.active && classes.active}`,
              label: classes.label,
            }}
            variant={variant}
            onClick={item.onClick}
          >
            {item.label}
          </Button>
        ))}
      </Button.Group>
    </Fragment>
  );
};

export default memo(FGroupBtn);

const useStyles = createStyles({
  root: {
    backgroundColor: "transparent",
    borderColor: COLORS.secondary,
    borderWidth: 1,
    color: COLORS.secondary,
    padding: "8px 18px",
    borderRadius: 4,
    "&:hover": {
      borderColor: COLORS.secondary,
      color: COLORS.secondary,
    },
  },
  active: {
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    "&:hover": {
      backgroundColor: COLORS.secondary,
      color: COLORS.white,
    },
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
  },
});
