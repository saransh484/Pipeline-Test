import { createStyles, getStylesRef } from "@mantine/core";
import { COLORS } from "../../assets/colors/colors";

export const fInputTextStyles = createStyles(() => ({
  label: {
    ref: getStylesRef("label"),
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "'Public Sans', sans-serif",
    color: COLORS.gray_494949,
    marginBottom: 8,
  },
  root: {
    width: "100%",
  },
  input: {
    border: `1px solid ${COLORS.border_B5B5BD}`,
    borderRadius: 8,
    padding: "6px 16px",
    height: "auto !important",
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.black,
    fontFamily: " 'Public Sans', sans-serif",
    backgroundColor: "transparent",
    "&:focus": {
      borderColor: COLORS.border_B5B5BD,
    },
    [`&:focus .${getStylesRef("label")}`]: {
      color: COLORS.secondary,
    },
    "&::placeholder": {
      color: COLORS.grayDark600,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: " 'Public Sans', sans-serif",
      letterSpacing: "0.4px",
    },
  },
  defaultValue: {
    backgroundColor: COLORS.primaryLightOpacity,
  },
  defaultValueLabel: {
    color: COLORS.secondary,
  },
  defaultValueRemove: {
    color: COLORS.secondary,
  },
}));
