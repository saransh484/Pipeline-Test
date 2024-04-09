import { Box, createStyles } from "@mantine/core";
import React, { memo } from "react";
import FImage from "../FImage";
import FTypography from "../typography/FTypography";
import { COLORS } from "../../assets/colors/colors";
import { TIcons, TImages } from "../../types";

interface IProps {
  variant: "primary" | "secondary";
  bg?: keyof typeof COLORS;
  color?: keyof typeof COLORS;
  name?: {
    static?: TImages | TIcons;
    url?: string;
  };
  title: string;
}

const FBadge = (props: IProps) => {
  const { name, title, variant, bg, color } = props;
  const { classes } = styles();
  switch (variant) {
    case "primary":
      return (
        <Box className={`${classes[variant ?? "primary"]}`}>
          {name?.static && <FImage name={name.static} alt="" width={18} />}
          {name?.url && <FImage url={name.url} alt="" width={18} />}

          <Box ml={5}>
            <FTypography
              variant="descriptionMedium"
              text={title}
              fontWeight={400}
              color="blackCover"
            />
          </Box>
        </Box>
      );
    case "secondary":
      return (
        <Box
          className={`${classes[variant ?? "secondary"]}`}
          style={{
            backgroundColor: COLORS[bg || "primaryLightOpacity"],
          }}
        >
          {name?.static && <FImage name={name.static} alt="" width={18} />}
          {name?.url && <FImage url={name.url} alt="" width={18} />}
          <Box ml={5}>
            <FTypography
              variant="descriptionMedium"
              text={title}
              fontWeight={400}
              color={color || "secondary"}
            />
          </Box>
        </Box>
      );
  }
};

export default memo(FBadge);

const styles = createStyles({
  primary: {
    backgroundColor: COLORS.white,
    padding: "4px 6px",
    borderRadius: 8,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderStyle: "solid",

    display: "flex",
  },
  secondary: {
    padding: "4px 6px",
    borderRadius: 8,
    borderColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",

    display: "flex",
  },
});
